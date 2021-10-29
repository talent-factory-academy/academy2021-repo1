import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    
    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `,

})
export class AppComponent {

  constructor() {
    console.log(environment.production)
  }
}
