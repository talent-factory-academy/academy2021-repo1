import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p [style.color]="color">
      hello {{name}}
    </p>
  `,
  styles: [
  ]
})
export class HelloComponent {
  @Input() name: any = 'guest';
  @Input() color = 'red';
}
