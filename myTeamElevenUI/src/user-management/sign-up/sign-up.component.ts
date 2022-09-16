import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide1=true;
  hide2=true;
  userName:String="";
  password1:String="";
  password2:String="";

  constructor() { }

  ngOnInit(): void {
  }

  createUser(){
    alert("signUpUser clicked...")
  }

}
