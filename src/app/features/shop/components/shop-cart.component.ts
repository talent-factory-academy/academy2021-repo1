import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../../model/product';

@Component({
  selector: 'app-shop-cart',
  template: `
    <h1>
      Cart
      <span *ngIf="cart.length">({{cart.length}} products)</span>
    </h1>
    <div *ngIf="!cart.length">Non ci sono prodotti nel carrello</div>

    <div *ngIf="cart.length">
      <li *ngFor="let item of cart" class="d-flex list-group-item">
        <div
          [style.backgroundColor]="item.variant"
          style="width: 20px; height: 20px"
        ></div>
        <div>
          {{item.product.name}}
        </div>
        <div>€ {{item.product.cost}}</div>
      </li>

      {{getTotal()}}
    </div>
  `,
  styles: [
  ]
})
export class ShopCartComponent {
  @Input() cart: CartItem[] =  [];

  getTotal() {
    return this.cart.reduce((acc: number, item: CartItem) => acc + item.product.cost, 0)
  }

}
