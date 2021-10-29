import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/product';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  template: `
    <div class="alert alert-danger" *ngIf="error; else productInfo">
      prodotto non esistente
    </div>

    <ng-template #productInfo>
      <p>
        product details! --> {{id}}
      </p>
      
      <h1>Name: {{product?.name}}</h1>
      <img [src]="product?.img" width="200">
      <p>Cost: € {{product?.cost}}</p>
    </ng-template>
    
    <hr>
    <button routerLink="/shop/2">next</button>
  `,
})
export class ProductComponent implements OnInit {
  id!: string;
  product: Product | null = null;
  error: boolean = false;
  sub!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    /*this.sub = this.activatedRoute.params
      .subscribe(res => {
        this.http.get<Product>(`http://localhost:3000/shop/${res.productID}`)
          .subscribe(
            res => this.product = res,
            err => this.error = true
          )
      })*/

    // cALLBACK HELL
/*    this.sub = this.activatedRoute.params
      .subscribe(res => {
        this.http.get<Product>(`http://localhost:3000/shop/${res.productID}`)
          .subscribe(
            res => this.product = res,
            err => this.error = true
          )
      })*/

    this.sub = this.activatedRoute.params
      .pipe(
        switchMap(res => this.http.get<Product>(`http://localhost:3000/shop/${res.productID}`)),
      )
      .subscribe(
        res => this.product = res,
        err => this.error = true
      )
  }

  ngOnDestroy() {
    console.log('destroy')
    this.sub.unsubscribe();
  }

}
