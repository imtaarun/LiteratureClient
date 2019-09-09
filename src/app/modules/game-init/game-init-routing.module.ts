import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamePlayButtonComponent } from 'src/app/modules/game-init/name-play-button/name-play-button.component';
import { GameRoomComponent } from 'src/app/modules/game-init/game-room/game-room.component';

const routes: Routes = [{
  path: '',
  component: NamePlayButtonComponent
}, {
  path: 'room/:id',
  component: GameRoomComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameInitRoutingModule { }
