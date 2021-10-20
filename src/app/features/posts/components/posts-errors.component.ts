import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts-errors',
  template: `
    <div class="alert alert-danger"  
         [ngSwitch]="status">
      <div *ngSwitchCase="404">ahia! il server è down</div>
      <div *ngSwitchCase="401">token scaduto</div>
      <div *ngSwitchDefault>Ahia!!! non funge niente</div>
    </div>
  `,
  styles: [
  ]
})
export class PostsErrorsComponent  {
  @Input() status: number | null = null;

}
