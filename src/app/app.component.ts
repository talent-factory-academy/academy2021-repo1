import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="page = 'shop'">Shop</button>
    <button (click)="page = 'users'">Users</button>
    <button (click)="page = 'contacts'">Contacts</button>
    <button (click)="page = 'contacts2ways'">Contacts 2ways</button>
    <button (click)="page = 'posts'">Posts</button>
    
    <div [ngSwitch]="page">
      <app-demo-shop *ngSwitchCase="'shop'"></app-demo-shop>
      <app-demo-users *ngSwitchCase="'users'"></app-demo-users>
      <app-contacts *ngSwitchCase="'contacts'"></app-contacts>
      <app-contacts2ways *ngSwitchCase="'contacts2ways'"></app-contacts2ways>
      <app-posts *ngSwitchCase="'posts'"></app-posts>
    </div>
  `,
})
export class AppComponent {
  page: string = 'contacts2ways';

  constructor() {
  }

}
