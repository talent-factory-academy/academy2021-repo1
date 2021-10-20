import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../../model/post';
import { NgForm } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { getShortText } from '../../shared/utils/string.utils'

@Component({
  selector: 'app-posts',
  template: `
    <app-posts-errors *ngIf="error" [status]="error.status" ></app-posts-errors>
    
    <app-modal *ngIf="isModalOpened">
      <app-posts-form
        [activePost]="activePost"
        (save)="savePost($event)"
        (clear)="clearForm()"
      ></app-posts-form>
    </app-modal>

    <app-posts-list
      [posts]="posts"
      [activePost]="activePost"
      (iconPlusClick)="isModalOpened = true; activePost = null"
      (selectPost)="selectPost($event)"
      (deletePost)="deletePost($event)"
    ></app-posts-list>
  `,
})
export class PostsComponent {
  posts: Post[] = [];
  error: HttpErrorResponse | null = null;
  activePost: Post | null = null;
  isModalOpened = false;

  constructor(private http: HttpClient) {
    http.get<Post[]>('http://localhost:3000/posts')
      .subscribe(
        (res) => this.posts = res,
        (err: HttpErrorResponse) => this.error = err)
  }



  deletePost(postToDelete: Post) {

    this.error = null;

    const index = this.posts.findIndex(p => p.id === postToDelete.id)
    this.posts.splice(index, 1);
    // this.deletingId = null;

    this.http.delete(`http://localhost:3000/posts/${postToDelete.id}`)
      .pipe(
        delay(2000)
      )
      .subscribe(
        () => {
          // clear activePost
          if(this.activePost?.id === postToDelete.id) {
            this.activePost = null;
          }
        },
        (err: HttpErrorResponse) => {
          this.error = err;
          // this.posts[index] = postToDelete
          this.posts.splice(index, 0, postToDelete)
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
        const index = this.posts.findIndex(p => p.id === this.activePost?.id)
        this.posts[index] = res;
        this.isModalOpened = false;
      })
  }

  add(f: NgForm) {
    this.http.post<Post>('http://localhost:3000/posts', f.value)
      .subscribe((res) => {
        this.posts.push(res);
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
