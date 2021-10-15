import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="page = 'shop'">Shop</button>
    <button (click)="page = 'users'">Users</button>
    <button (click)="page = 'contacts'">Contacts</button>
    <button (click)="page = 'contacts2ways'">Contacts 2ways</button>
<!--    <app-demo-shop *ngIf="page === 'shop'"></app-demo-shop>
    <app-demo-users *ngIf="page === 'users'"></app-demo-users>
    <app-contacts *ngIf="page === 'contacts'"></app-contacts>-->
    
    <div [ngSwitch]="page">
      <app-demo-shop *ngSwitchCase="'shop'"></app-demo-shop>
      <app-demo-users *ngSwitchCase="'users'"></app-demo-users>
      <app-contacts *ngSwitchCase="'contacts'"></app-contacts>
      <app-contacts2ways *ngSwitchCase="'contacts2ways'"></app-contacts2ways>
    </div>
  `,
})
export class AppComponent {
  page: string = 'contacts';

  constructor() {
  }

}
