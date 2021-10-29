import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop/services/shop.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="row">
      <div class="col">
        <button routerLink="registration">registration</button>
        <br>
        <button routerLink="/login/lostpass">lost pass</button>

      </div>
      <div class="col">
        <router-outlet></router-outlet>
      </div>
    </div>
   `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  section = 'signin';

  ngOnInit(): void {
  }

}
