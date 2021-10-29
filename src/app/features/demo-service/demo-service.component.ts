import { Component, OnInit } from '@angular/core';
import { LogService } from '../../core/services/log.service';

@Component({
  selector: 'app-demo-service',
  template: `
    
    <div class="row">
      <div class="col">
        <app-left></app-left>
      </div>
      <div class="col">
        <app-right></app-right>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DemoServiceComponent {

  constructor(public logService: LogService) {
  }
}
