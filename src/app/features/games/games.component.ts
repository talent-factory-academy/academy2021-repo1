import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  template: `
    <button  routerLink="/games/indy">Indy</button>
    <button routerLink="/games/rpg">RPG</button>
    
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
