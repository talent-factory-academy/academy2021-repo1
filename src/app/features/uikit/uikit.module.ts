import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UikitComponent } from './uikit.component';
import { UikitLayoutComponent } from './components/uikit-layout.component';
import { UikitButtonsComponent } from './components/uikit-buttons.component';
import { UikitComplexComponent } from './components/uikit-complex.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    UikitComponent,
    UikitLayoutComponent,
    UikitButtonsComponent,
    UikitComplexComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UikitComponent,
        children: [
          { path: 'layout', component: UikitLayoutComponent},
          { path: 'buttons', component: UikitButtonsComponent},
          { path: 'complex', component: UikitComplexComponent},
          { path: '', redirectTo: 'layout', pathMatch: 'full'}
        ]
      }
    ])
  ]
})
export class UikitModule { }
