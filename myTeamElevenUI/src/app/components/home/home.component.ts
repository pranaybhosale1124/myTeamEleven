import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  loggedIn:any;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
  }
  signInWithGoogle() {
    console.log("in signInWithGoogle");
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("User signInWithGoogle--->",this.user);
      
    });
  }

}
