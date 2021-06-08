import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptainsComponent } from './captains/captains.component';

import { HomeComponent } from './home/home.component'
import { ShipsComponent } from './ships/ships.component';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'ships',
    component: ShipsComponent,
    data: { title: 'Ships' }
  },
  {
    path: 'captains',
    component: CaptainsComponent,
    data: { title: 'Captains' }
  },
  {
    path: 'teams',
    component: TeamsComponent,
    data: { title: 'Teams' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
