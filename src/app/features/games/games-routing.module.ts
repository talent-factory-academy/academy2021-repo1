import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { IndyComponent } from './pages/indy.component';
import { RpgComponent } from './pages/rpg.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      { path: 'indy', component: IndyComponent },
      { path: 'rpg', component: RpgComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
