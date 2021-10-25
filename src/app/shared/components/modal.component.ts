import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal',
  // encapsulation: ViewEncapsulation.None,
  template: `
    <div class="my-modal bg" >
      <ng-content></ng-content>
      <i class="fa fa-times fa-2x" 
         (click)="close.emit()"
         style="position: absolute; right: 20px; top: 20px"></i>
    </div>
  `,
  styles: [`
    .my-modal {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 10;
      background-color: rgba(255, 255, 255, 1);
      padding: 1rem;
    }
  `]
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
