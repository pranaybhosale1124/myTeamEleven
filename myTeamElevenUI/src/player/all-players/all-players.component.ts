import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {

  allPlayers!:any[];

  constructor(private playersService:PlayerService) { }

  ngOnInit(): void {
    console.log("In AllPlayersComponent");
    this.getAllPlayers();
  }

  getAllPlayers():any{
    this.playersService.getAllPlayers().subscribe((players)=>{
      this.allPlayers=players;
      console.log(this.allPlayers);      
    })
  }
}
