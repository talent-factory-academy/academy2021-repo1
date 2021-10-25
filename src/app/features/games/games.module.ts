import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { IndyComponent } from './pages/indy.component';
import { RpgComponent } from './pages/rpg.component';


@NgModule({
  declarations: [
    GamesComponent,
    IndyComponent,
    RpgComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
