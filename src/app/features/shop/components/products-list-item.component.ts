import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
