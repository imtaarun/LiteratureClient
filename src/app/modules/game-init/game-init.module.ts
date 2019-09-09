import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameInitRoutingModule } from './game-init-routing.module';
import { NamePlayButtonComponent } from './name-play-button/name-play-button.component';
import { NgMaterialModule } from 'src/app/core/designs/ngmaterial.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GameRoomComponent } from './game-room/game-room.component';

@NgModule({
  declarations: [NamePlayButtonComponent, GameRoomComponent],
  imports: [
    CommonModule,
    GameInitRoutingModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GameInitModule { }
