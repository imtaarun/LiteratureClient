import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    loadChildren: './modules/game-init/game-init.module#GameInitModule'
  }, {
    path: ':id/game',
    loadChildren: './modules/game/game.module#GameModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
