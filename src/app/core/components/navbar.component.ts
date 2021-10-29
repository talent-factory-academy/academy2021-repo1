import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  template: `
    <button routerLink="welcome" routerLinkActive="bg-warning" >Welcome</button>
    <button routerLink="login" routerLinkActive="bg-warning" >login</button>
    <button routerLink="shop"  routerLinkActive="bg-warning" [routerLinkActiveOptions]="{ exact: true}">Shop</button>
    <!--<button routerLink="shop/1"  routerLinkActive="bg-warning" >Shop 1</button>-->
    <button routerLink="users"  routerLinkActive="bg-warning" >Users</button>
    <button routerLink="contacts"  routerLinkActive="bg-warning" >Contacts</button>
    <button routerLink="contacts2ways"  routerLinkActive="bg-warning" >Contacts 2ways</button>
    <button routerLink="posts"  routerLinkActive="bg-warning" >Posts</button>
    <button routerLink="uikit" routerLinkActive="bg-warning" >uikit</button>
    <button routerLink="games" routerLinkActive="bg-warning" >games</button>
    <button routerLink="settings" routerLinkActive="bg-warning" >settings</button>
    <button routerLink="demo-service" routerLinkActive="bg-warning" >demo-service</button>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(router: Router) {
    // ----ooooo---------oooooo--------------->
    // filter
    // --------o--------------o
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(event => {
          console.log('GA', event)
      })

  }

  ngOnInit(): void {
  }

}
