import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  template: `
    <app-posts-errors *ngIf="postService.error" [status]="postService.error.status" ></app-posts-errors>
    
<!--    <app-modal
      *ngIf="postService.isModalOpened" 
      (close)="postService.isModalOpened = false"
    >-->
      <app-posts-form
        [activePost]="postService.activePost"
        (save)="postService.savePost($event)"
        (clear)="postService.clearForm()"
      ></app-posts-form>
<!--    </app-modal>-->
    
    <app-posts-list
      [posts]="postService.posts"
      [activePost]="postService.activePost"
      (iconPlusClick)="postService.isModalOpened = true; postService.activePost = null"
      (selectPost)="postService.selectPost($event)"
      (deletePost)="postService.deletePost($event)"
    ></app-posts-list>
  `,
})
export class PostsComponent {
  constructor(public postService: PostsService) {
    this.postService.getAll();
  }
}
