import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private value: Theme = 'dark';

  constructor() {
    // this.theme = localStorage.getItem('theme') as Theme
    const theme: Theme = localStorage.getItem('theme') as Theme;

    if (theme) {
      this.theme = theme
    }
  }

  set theme(theme: Theme) {
    localStorage.setItem('theme', theme)
    this.value = theme;
  }

  get theme(): Theme {
    // return localStorage.getItem('theme') as Theme
    return this.value;
  }

}
