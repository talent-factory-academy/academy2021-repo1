import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoServiceRoutingModule } from './demo-service-routing.module';
import { DemoServiceComponent } from './demo-service.component';
import { LeftComponent } from './components/left.component';
import { RightComponent } from './components/right.component';
import { LogService } from '../../core/services/log.service';
import { FakelogService } from '../../core/services/fakelog.service';


@NgModule({
  declarations: [
    DemoServiceComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    DemoServiceRoutingModule
  ],
  providers: [
    { provide: LogService, useClass: FakelogService}
  ]
})
export class DemoServiceModule { }
