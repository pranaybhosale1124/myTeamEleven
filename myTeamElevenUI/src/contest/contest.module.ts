import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllContestsComponent } from './all-contests/all-contests.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { ContestComponent } from './contest/contest.component';
import { ContestPlayersComponent } from './contest-players/contest-players.component';

@NgModule({
  declarations: [
    AllContestsComponent,
    ContestComponent,
    ContestPlayersComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports:[
    ContestComponent,
    AllContestsComponent,
    ContestPlayersComponent
  ]
})
export class ContestModule { }
