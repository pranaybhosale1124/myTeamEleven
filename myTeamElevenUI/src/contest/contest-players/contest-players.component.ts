import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContestService } from '../contest.service';

@Component({
  selector: 'app-contest-players',
  templateUrl: './contest-players.component.html',
  styleUrls: ['./contest-players.component.css']
})
export class ContestPlayersComponent implements OnInit {

  contestId:any;

  constructor(private contestService: ContestService, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.contestId=this.activatedRouter.snapshot.paramMap.get('contest_id');
    console.log(this.contestId);
    
    this.contestService.getContestDetails()
  }

}
