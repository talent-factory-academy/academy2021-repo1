import { Injectable } from '@angular/core';
import { SharedModule } from '../shared.module';

// @Injectable({ providedIn: SharedModule })
export class TranslateService {

  constructor() {
    console.log('translate service')
  }
}
