import { Component } from '@angular/core';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-demo-shop',
  template: `
    <app-products-list
      [products]="shopService.products"
      [selectedProduct]="shopService.selectedProduct"
      (selectVariant)="shopService.selectVariant($event)"
      (addToCart)="shopService.addToCart()"
    ></app-products-list>

    <app-shop-cart [cart]="shopService.cart"></app-shop-cart>
    
  `,
  providers: [
    ShopService
  ]
})
export class DemoShopComponent {
  constructor(public shopService: ShopService) {
    this.shopService.getAll()
  }


  ngOnDestroy() {
    console.log('component on destroy')
  }
}
