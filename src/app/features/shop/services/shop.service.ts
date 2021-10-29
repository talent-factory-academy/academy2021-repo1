import { Injectable } from '@angular/core';
import { CartItem, Product } from '../../../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShopService {
  products: Product[] = []
  cart: CartItem[] =  [];
  selectedProduct: CartItem | null = null;

  constructor(private http: HttpClient) {
    console.log('init')
  }

  getAll() {
    this.http.get<Product[]>('http://localhost:3000/shop')
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


  ngOnDestroy() {
    console.log('service on destroy')
  }
}
