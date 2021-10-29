import { Component, OnInit, Optional } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { LogService } from '../../core/services/log.service';

@Component({
  selector: 'app-settings',
  template: `
    <h1>Current theme is {{themeService.theme}}</h1>
    <button (click)="themeService.theme = 'light'">light</button>
    <button (click)="themeService.theme = 'dark'">dark</button>
  `,
})
export class SettingsComponent {
  constructor(
    public themeService: ThemeService,
    @Optional() public logService: LogService
  ) {
    console.log(logService)
    console.log(themeService.theme)
  }
}
