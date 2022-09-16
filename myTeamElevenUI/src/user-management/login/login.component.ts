import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  userName:String="";
  user:any;
  isLoggedIn:Boolean=false;
  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedIn = (user != null);
      console.log("User--->",this.user);
      sessionStorage.setItem("loggedInUser",JSON.stringify(this.user))
      this.router.navigate(['/signup'])
    });
  }

}
