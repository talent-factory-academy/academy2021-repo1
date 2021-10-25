import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { DeactivatePageGuard } from './services/deactivate-page.guard';

@NgModule({
  declarations: [
   WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WelcomeComponent,
        canDeactivate: [DeactivatePageGuard]
      }
    ])
  ],
  providers: [
    DeactivatePageGuard,
  ]
})
export class WelcomeModule { }
