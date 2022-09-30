import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContestService } from '../contest.service';

@Component({
  selector: 'app-all-contests',
  templateUrl: './all-contests.component.html',
  styleUrls: ['./all-contests.component.css']
})
export class AllContestsComponent implements OnInit {
  allContests: any;

  constructor(private contestService:ContestService, private router:Router) { }

  ngOnInit(): void {
    this.getAllContests();
  }
  getAllContests(){
  this.contestService.getAllContests().subscribe(contests=>{
    console.log("contests:::",contests);
    this.allContests=contests
  })
  }

  openContest(contest_id:any){
    this.router.navigate([`/contest/${contest_id}`])
  }
}
