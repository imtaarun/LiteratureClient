import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDashboardComponent } from 'src/app/modules/game/game-dashboard/game-dashboard.component';
import { GameOverComponent } from 'src/app/modules/game/game-over/game-over.component';

const routes: Routes = [{
  path: '',
  component: GameDashboardComponent
}, {
  path: 'gameover/:team',
  component: GameOverComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
