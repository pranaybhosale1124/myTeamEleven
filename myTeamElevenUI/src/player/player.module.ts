import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { AllPlayersComponent } from './all-players/all-players.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    PlayerComponent,
    AllPlayersComponent
  ],
  imports: [
    CommonModule,

    MatExpansionModule,
    MatListModule,
    MatTableModule
  ]
})
export class PlayerModule { }