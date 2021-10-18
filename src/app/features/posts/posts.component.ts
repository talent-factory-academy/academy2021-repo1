import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../../model/post';
import { NgForm } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { getShortText } from '../../shared/utils/string.utils'

@Component({
  selector: 'app-posts',
  template: `
    <!--ERROR MSG-->
    <div class="alert alert-danger" *ngIf="error" [ngSwitch]="error.status">
      <div *ngSwitchCase="404">ahia! il server è down</div>
      <div *ngSwitchCase="401">token scaduto</div>
      <div *ngSwitchDefault>Ahia!!! non funge niente</div>
    </div>

    <!--POST FORM -->
    <div class="my-modal" *ngIf="isModalOpened">
      <form #f="ngForm" (submit)="save(f)">
        <input type="text" placeholder="title" name="title" [ngModel]="activePost?.title" required class="form-control">
        <input type="text" placeholder="desc" name="body" [ngModel]="activePost?.body" required class="form-control">
        <button type="submit" [disabled]="f.invalid">
          {{activePost ? 'EDIT' : 'ADD'}}
        </button>
        <button type="button" (click)="clearForm(f)" *ngIf="activePost">CLEAR FORM</button>
      </form>
      
      <i class="fa fa-times fa-2x" (click)="isModalOpened = false" style="position: absolute; right: 20px; top: 20px"></i>
    </div>

    <!--POST LIST -->
    <h1>
      <i class="fa fa-plus-circle" (click)="isModalOpened = true; activePost = null"></i>
      Posts
    </h1>
    
    <li
      *ngFor="let post of posts; let idx = index; let first = first; let odd = odd;" 
      (click)="selectPost(post)"
      class="list-group-item"
      [ngClass]="{
        active: post.id === activePost?.id,
        'bg-secondary text-white': odd
      }"
      [style.border-top]="first ? '3px solid black' : null"
    >
      {{idx + 1 | number: '3.0-0'}}) {{getShortTextHandler(post.title, 20)}} - {{post.id}}

      <i *ngIf="!(deletingId === post.id)" class="fa fa-trash" (click)="deletePost(post, $event)"></i>
      
      <span *ngIf="deletingId === post.id">
        are you sure? <button (click)="deletePostHttp(post, $event)">SI</button> | <button (click)="deletingId = null">NO</button>
      </span>
    </li>
  `,
  styles: [`
    .my-modal {
      position: fixed;
      top: 0; 
      right: 0; 
      left: 0; 
      bottom: 0;
      z-index: 10;
      background-color: rgba(255, 255, 255, 1);
      padding: 1rem;
    }
  
  `]
})
export class PostsComponent {
  posts: Post[] = [];
  error: HttpErrorResponse | null = null;
  activePost: Post | null = null;
  deletingId: number | null = null;
  isModalOpened = false;

  constructor(private http: HttpClient) {
    http.get<Post[]>('http://localhost:3000/posts')
      .subscribe(
        (res) => this.posts = res,
        (err: HttpErrorResponse) => this.error = err)
  }


  /**
   * Delete
   * Simulate optimistic update
   * @param postToDelete
   * @param event
   */
  deletePost(postToDelete: Post, event: MouseEvent) {
    event.stopPropagation();
    this.deletingId = postToDelete.id;
  }

  deletePostHttp(postToDelete: Post, event: MouseEvent) {
    event.stopPropagation();
    this.error = null;

    const index = this.posts.findIndex(p => p.id === postToDelete.id)
    this.posts.splice(index, 1);
    this.deletingId = null;

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


  save(f: NgForm) {
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

  clearForm(f: NgForm) {
    f.reset();
    this.activePost = null;
  }

  getShortTextHandler(text: string, max: number) {
    return getShortText(text, max);
  }
}
