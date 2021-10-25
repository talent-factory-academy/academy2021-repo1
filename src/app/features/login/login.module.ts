import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SigninComponent } from './components/signin.component';
import { RegistrationComponent } from './components/registration.component';
import { LostpassComponent } from './components/lostpass.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    LostpassComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,

    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
        children: [
          { path: 'signin', component: SigninComponent},
          //{ path: 'registration', component: RegistrationComponent},
          { path: 'registration', loadChildren: () => import('./components/registration.module').then(m => m.RegistrationModule)},
          { path: 'lostpass', component: LostpassComponent},
          { path: '', redirectTo: 'signin', pathMatch: 'full'},
          /*{ path: '**', redirectTo: 'signin'}*/
        ]
      }
    ])
  ]
})
export class LoginModule { }
