import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { CardModule } from './components/card.module';
import { HelloModule } from './components/hello.module';
import { TranslateService } from './services/translate.service';

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports:[...COMPONENTS, ...DIRECTIVES, CardModule, HelloModule],
  imports: [
    CommonModule,
    CardModule
  ],
  providers: [
    // TranslateService
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        TranslateService
      ]
    }
  }
}
