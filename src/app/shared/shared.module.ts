import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { CardModule } from './components/card.module';
import { HelloModule } from './components/hello.module';

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports:[...COMPONENTS, ...DIRECTIVES, CardModule, HelloModule],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class SharedModule { }
