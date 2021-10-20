import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  template: `
    <ul class="nav nav-tabs">
      <li
        class="nav-item" 
        *ngFor="let item of items"
        (click)="tabClick.emit(item)"
      >
        <a class="nav-link" 
           [ngClass]="{'active': item.id === active?.id}">
          {{item[labelField]}}
        </a>
      </li>
    </ul>
  `,
})
export class TabbarComponent<T extends {[key: string]: any}> {
  @Input() items: T[] = [];
  @Input() active: T | null = null;
  @Input() labelField = 'label'
  @Output() tabClick = new EventEmitter<T>();
}
