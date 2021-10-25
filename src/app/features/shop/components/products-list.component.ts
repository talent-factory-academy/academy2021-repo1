import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem, Product } from '../../../model/product';

@Component({
  selector: 'app-products-list',
  template: `
    
    <!--filtri-->
    <!--    
    <app-products-list-item
      *ngFor="let product of products"
    ></app-products-list-item>
    -->
    
    <div class="row">
      <div class="col-4" *ngFor="let product of products">
        <div class="card" >
          <img
            [src]="product.img" alt=""
            [routerLink]="'/shop/' + product.id"
          >
          <div class="card-header">{{product.name}}</div>
          <div class="card-body text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            € {{product.cost}}
  
            <app-products-list-variants
              [product]="product"
              [selectedProduct]="selectedProduct"
              (selectVariant)="selectVariant.emit($event)"
            ></app-products-list-variants>
  
            <button
              class="btn btn-outline-primary mt-3"
              [disabled]="!(product.id === selectedProduct?.product?.id)"
              (click)="addToCart.emit()"
            >ADD TO CART</button>
  
          </div>
        </div>
  
      </div>
    </div>

    <!--filtri-->

    <!--filtri-->
    

  `,
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = []
  @Input() selectedProduct: CartItem | null = null;
  @Output() selectVariant = new EventEmitter<CartItem>()
  @Output() addToCart = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
