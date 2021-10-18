import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from '../../model/product';

@Component({
  selector: 'app-demo-shop',
  template: `
    
    <div class="row">
      
      <div class="col-4" *ngFor="let product of products">
        <div class="card" >
          <img [src]="product.img" alt="">
          <div class="card-header">{{product.name}}</div>
          <div class="card-body text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            € {{product.cost}}
            
            <div class="d-flex justify-content-center">
              <div
                *ngFor="let variant of product.variants"
                [style.backgroundColor]="variant"
                style="width: 20px; height: 20px"
                [style.border]="
                  product.id === selectedProduct?.product?.id && 
                  variant === selectedProduct?.variant 
                  ? '3px solid black' : null
                "
                (click)="selectVariant(product, variant)"
              ></div>
            </div>

            <button 
              class="btn btn-outline-primary mt-3"
              [disabled]="!(product.id === selectedProduct?.product?.id)"
              (click)="addToCart()"
            >ADD TO CART</button>

          </div>
        </div>

      </div>

    </div>
    
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
  products: Product[] = [
    {
      id: 1,
      name: 'Tshirt XYZ',
      cost: 50,
      img: 'https://picsum.photos/id/237/400/300',
      variants: ['red', 'purple', 'cyan'],
    },
    {
      id: 2,
      name: 'Pants ABC',
      cost: 30,
      img: 'https://picsum.photos/id/238/400/300',
      variants: ['red', 'lightgreen'],
    },
    {
      id: 3,
      name: 'Maglione XYZ',
      cost: 20,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
  ];
  cart: CartItem[] =  [];
  selectedProduct: CartItem | null = null;

  addToCart() {
    if (this.selectedProduct) {
      this.cart.push(this.selectedProduct)
    }
  }

  selectVariant(product: Product, variant: string) {
    this.selectedProduct = {
      product: product,
      variant: variant
    }
  }

  getTotal() {
    return this.cart.reduce((acc: number, item: CartItem) => acc + item.product.cost, 0)
  }

}
