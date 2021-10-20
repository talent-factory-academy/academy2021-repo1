import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../model/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts-form',
  template: `
    <form #f="ngForm" (submit)="saveHandler(f)">
      <input type="text" placeholder="title" name="title" 
             [ngModel]="activePost?.title" required class="form-control">
      <input type="text" placeholder="desc" name="body" 
             [ngModel]="activePost?.body" required class="form-control">
      <button type="submit" [disabled]="f.invalid">
        {{activePost ? 'EDIT' : 'ADD'}}
      </button>
      <button type="button" (click)="clearFormHandler(f)" *ngIf="activePost">CLEAR FORM</button>
    </form>
  `,
  styles: [
  ]
})
export class PostsFormComponent {
  @Input() activePost: Post | null = null;
  @Output() clear = new EventEmitter()
  @Output() save = new EventEmitter<NgForm>()

  saveHandler(f: NgForm) {
    this.save.emit(f)
  }

  clearFormHandler(f: NgForm) {
    f.reset();
    this.clear.emit()
  }
}
