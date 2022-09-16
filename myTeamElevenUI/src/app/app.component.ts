import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { HttpClient  } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Team Eleven';
  mobileQuery: MediaQueryList;
  fillerNav:any="";
  defaultIcon:any="https://lh3.googleusercontent.com/a-/AFdZucrB9bO-oJxXbfel9AG86ejds08MwLrdEfB0qOc8JQ=s96-c"
  loggedInUser:any;
  private _mobileQueryListener: () => void;
  ipAddress: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private http:HttpClient){
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.getIPAddress();
    const user=sessionStorage.getItem("loggedInUser") || null;
    this.loggedInUser=JSON.parse(user || "null")
    console.log("loggedInUser---",this.loggedInUser);
    
    if(user==null || user==undefined || user==""){
      this.router.navigate(['/login'])
    }
  }

  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
      console.log("ip address--->",this.ipAddress);
      
    });
  }

  getUser(event:any){
    console.log("in getUser--->",event);
    
  }
  closeSideNavBar(){
    console.log("closeSideNavBar");
  }
}
