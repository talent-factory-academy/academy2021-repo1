import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './components/posts-list.component';
import { PostsFormComponent } from './components/posts-form.component';
import { PostsErrorsComponent } from './components/posts-errors.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // post
    PostsComponent,
    PostsListComponent,
    PostsFormComponent,
    PostsErrorsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: PostsComponent}
    ])
  ]
})
export class PostsModule { }
