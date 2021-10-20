import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../model/post';
import { getShortText } from '../../../shared/utils/string.utils';

@Component({
  selector: 'app-posts-list',
  template: `
    <!--POST LIST -->
    <h1>
      <i class="fa fa-plus-circle" (click)="iconPlusClick.emit()"></i>
      Posts
    </h1>
    
    <li
      *ngFor="let post of posts; let idx = index; let first = first; let odd = odd;"
      (click)="selectPost.emit(post)"
      class="list-group-item"
      [ngClass]="{
        active: post.id === activePost?.id,
        'bg-secondary text-white': odd
      }"
      [style.border-top]="first ? '3px solid black' : null"
    >
     {{getShortTextHandler(post.title, 20)}} - {{post.id}}

      <i *ngIf="!(deletingId === post.id)"
         class="fa fa-trash" 
         (click)="deletingPostHandler(post, $event)"></i>

      <span *ngIf="deletingId === post.id">
        are you sure? 
        <button (click)="deletePostHandler(post, $event)">SI</button> | 
        <button (click)="deletingId = null">NO</button>
      </span>
    </li>
  `,
  styles: [
  ]
})
export class PostsListComponent {
  @Input() posts: Post[] = [];
  @Input() activePost: Post | null = null;
  @Output() selectPost = new EventEmitter<Post>()
  @Output() deletePost = new EventEmitter<Post>()
  @Output() iconPlusClick = new EventEmitter()
  deletingId: number | null = null;

  getShortTextHandler(text: string, max: number) {
    return getShortText(text, max);
  }

  deletingPostHandler(post: Post, event: MouseEvent) {
    event.stopPropagation();
    this.deletingId = post.id;
  }

  deletePostHandler(post: Post, event: MouseEvent) {
    event.stopPropagation();
    this.deletePost.emit(post);
  }
}

