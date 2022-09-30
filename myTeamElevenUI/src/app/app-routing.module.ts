import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestPlayersComponent } from 'src/contest/contest-players/contest-players.component';
import { ContestComponent } from 'src/contest/contest/contest.component';
import { AllPlayersComponent } from 'src/player/all-players/all-players.component';
import { LoginComponent } from 'src/user-management/login/login.component';
import { SignUpComponent } from 'src/user-management/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup',component: SignUpComponent},
  {path:'all-players',component: AllPlayersComponent},
  {path:'contest/:contest_id',component: ContestPlayersComponent},
  {path:'',pathMatch:'full', redirectTo:'/home'},
  {path:'**',pathMatch:'full', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
