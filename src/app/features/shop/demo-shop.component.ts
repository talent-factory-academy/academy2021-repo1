import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from '../../model/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo-shop',
  template: `
    
    <app-products-list
      [products]="products"
      [selectedProduct]="selectedProduct"
      (selectVariant)="selectVariant($event)"
      (addToCart)="addToCart()"
    ></app-products-list>

    
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
export class DemoShopComponent {
  products: Product[] = []
  cart: CartItem[] =  [];
  selectedProduct: CartItem | null = null;

  constructor(private http: HttpClient) {
    http.get<Product[]>('http://localhost:3000/shop')
      .subscribe(res => {
        this.products = res;
      })
  }

  addToCart() {
    if (this.selectedProduct) {
      this.cart.push(this.selectedProduct)
    }
  }

  selectVariant(cartItem: CartItem) {
    this.selectedProduct = cartItem;
  }

  getTotal() {
    return this.cart.reduce((acc: number, item: CartItem) => acc + item.product.cost, 0)
  }

}
