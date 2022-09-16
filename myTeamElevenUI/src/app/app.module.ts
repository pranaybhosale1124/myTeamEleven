import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserManagementModule } from 'src/user-management/user-management.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavbarListComponent } from './components/side-navbar-list/side-navbar-list.component';
import {MatListModule} from '@angular/material/list';
import { ContestModule } from 'src/contest/contest.module';
import { PlayerModule } from 'src/player/player.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavbarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    CoolSocialLoginButtonsModule,

    UserManagementModule,
    ContestModule,
    PlayerModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '755574975892-9e2h40bfidsavmf7pib1b8ccbv8p6aue.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err:any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
