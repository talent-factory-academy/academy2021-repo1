import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uikit',
  template: `
    <button routerLink="layout" routerLinkActive="bg-warning" >layout</button>
    <button routerLink="buttons" routerLinkActive="bg-warning" >buttons</button>
    <button routerLink="complex" routerLinkActive="bg-warning" >complex</button>
    <hr>
    <router-outlet></router-outlet>
  `,
})
export class UikitComponent {

}
