import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  template: `
    <h1>sign in</h1>
    <input type="text">
    <input type="text">
  `,
  styles: [
  ]
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
