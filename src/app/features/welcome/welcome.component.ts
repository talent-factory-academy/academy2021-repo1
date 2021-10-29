import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-welcome',
  template: `
    <h1>{{themeService.theme}}</h1>
  `,
})
export class WelcomeComponent {
  constructor(public themeService: ThemeService) {
    console.log(themeService.theme)
  }

  doSomething() {
    return confirm('sei sicuro di voler uscire?');
  }
}
