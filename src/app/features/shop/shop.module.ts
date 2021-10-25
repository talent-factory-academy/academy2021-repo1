import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoShopComponent } from './demo-shop.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductsCartComponent } from './components/products-cart.component';
import { ProductsListVariantsComponent } from './components/products-list-variants.component';
import { ProductsListItemComponent } from './components/products-list-item.component';

@NgModule({
  declarations: [
    DemoShopComponent,
    ProductsListComponent,
    ProductsCartComponent,
    ProductsListVariantsComponent,
    ProductsListItemComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DemoShopComponent }
    ])
  ]
})
export class DemoShopModule { }
