import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllContestsComponent } from './all-contests/all-contests.component';



@NgModule({
  declarations: [
    AllContestsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllContestsComponent
  ]
})
export class ContestModule { }
