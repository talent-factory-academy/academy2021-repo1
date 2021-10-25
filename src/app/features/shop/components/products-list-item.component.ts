import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list-item',
  template: `
    <p>
      products-list-item works!
    </p>
  `,
  styles: [
  ]
})
export class ProductsListItemComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit(): void {
  }

}
