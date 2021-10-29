import { Injectable } from '@angular/core';
import { Post } from '../../../model/post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [];
  error: HttpErrorResponse | null = null;
  activePost: Post | null = null;
  isModalOpened = false;

  constructor(private http: HttpClient) { }

  getAll() {
    this.http.get<Post[]>('http://localhost:3000/posts')
      .subscribe(
        (res) => this.posts = res,
        (err: HttpErrorResponse) => this.error = err)
  }


  deletePost(postToDelete: Post) {
    this.error = null;

    /*const index = this.posts.findIndex(p => p.id === postToDelete.id)
    this.posts.splice(index, 1);*/

    this.http.delete(`http://localhost:3000/posts/${postToDelete.id}`)
      .pipe(delay(2000))
      .subscribe(
        () => {
          this.posts = this.posts.filter(p => p.id !== postToDelete.id)
          // clear activePost
          if(this.activePost?.id === postToDelete.id) {
            this.activePost = null;
          }
        },
        (err: HttpErrorResponse) => {
          this.error = err;
          // this.posts[index] = postToDelete
          // this.posts.splice(index, 0, postToDelete)
        }
      )
  }


  savePost(f: NgForm) {
    if (this.activePost) {
      this.edit(f);
    } else {
      this.add(f);
    }
  }

  edit(f: NgForm) {
    this.http.patch<Post>(`http://localhost:3000/posts/${this.activePost?.id}`, f.value)
      .subscribe((res) => {
        /*const index = this.posts.findIndex(p => p.id === this.activePost?.id)
        this.posts[index] = res;*/
        this.posts = this.posts.map(p => {
          if (p.id === this.activePost?.id) {
            return res;
          }
          return p;
        })
        this.isModalOpened = false;
      })
  }


  add(f: NgForm) {
    this.http.post<Post>('http://localhost:3000/posts', f.value)
      .subscribe((res) => {
        this.posts.push(res);
        // this.posts = [...this.posts, res]
        f.reset();
        this.isModalOpened = false;
      })
  }

  selectPost(post: Post) {
    this.activePost = post;
    this.isModalOpened = true;
  }

  clearForm() {
    this.activePost = null;
  }

}
