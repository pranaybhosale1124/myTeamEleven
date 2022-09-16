import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  @Output() user = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  createUser(){
    alert("signUpUser clicked...")
  }

}
