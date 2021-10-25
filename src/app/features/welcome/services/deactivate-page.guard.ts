import { CanActivate, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { WelcomeComponent } from '../welcome.component';

// @Injectable({ providedIn: WelcomeModule })
export class DeactivatePageGuard implements CanDeactivate<WelcomeComponent> {
  canDeactivate(component: WelcomeComponent): boolean {
    console.log('quit deactivate')
    return component.doSomething();
  }
}

