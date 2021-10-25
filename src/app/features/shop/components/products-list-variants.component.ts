import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem, Product } from '../../../model/product';

@Component({
  selector: 'app-products-list-variants',
  template: `
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
        (click)="selectVariant.emit({product: product, variant: variant})"
      ></div>
    </div>
  `,
})
export class ProductsListVariantsComponent {
  @Input() product!: Product;
  @Input() selectedProduct: CartItem | null = null;
  @Output() selectVariant = new EventEmitter<CartItem>()
}
