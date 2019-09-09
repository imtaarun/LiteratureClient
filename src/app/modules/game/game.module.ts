import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { GameRoutingModule } from './game-routing.module';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgMaterialModule } from 'src/app/core/designs/ngmaterial.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [GameDashboardComponent, GameOverComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GameModule { }
