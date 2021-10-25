import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoUsersComponent } from './demo-users.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DemoUsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: DemoUsersComponent}
    ])
  ]
})
export class UsersModule { }
