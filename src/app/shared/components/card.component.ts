import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type Types = 'dark' | 'danger' | 'success';

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card" [ngClass]="{'mb-3': bottomMargin}">
      <div
        class="card-header text-white"
        [ngClass]="'bg-' + type"
        *ngIf="title"
        (click)="opened = !opened"
      >
        {{title}}

        <div class="pull-right">
          <i
            class="fa"
            *ngIf="icon" [ngClass]="icon"
            (click)="iconClickHandler($event)"
            style="cursor:pointer;"
          ></i>
        </div>
      </div>
      <div class="card-body" *ngIf="opened">
        <ng-content></ng-content>
      </div>
    </div>
    
    {{render()}}
  `,
})
export class CardComponent {
  @Input() title: string | null = null;
  @Input() type: Types = 'dark'
  @Input() icon: string | null = null;
  @Input() bottomMargin: boolean = true;
  @Output() iconClick = new EventEmitter();

  opened = true;

  iconClickHandler(event: MouseEvent) {
    event.stopPropagation();
    this.iconClick.emit()
  }

  render() {
    console.log('cardrender')
  }
}
