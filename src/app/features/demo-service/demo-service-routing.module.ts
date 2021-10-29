import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoServiceComponent } from './demo-service.component';

const routes: Routes = [{ path: '', component: DemoServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoServiceRoutingModule { }
