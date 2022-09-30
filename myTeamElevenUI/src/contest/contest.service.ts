import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContestService {

  constructor(private httpClient:HttpClient) { }
  apiUrl='http://localhost:3000/contest/'

  getAllContests():Observable<any>{
    const allCOntests= this.httpClient.get(`${this.apiUrl}/`)
    console.log("getAllContests:::",allCOntests);
    return allCOntests;
  }

  getContestDetails():Observable<any>{
    const contest= this.httpClient.get(`${this.apiUrl}/contest-details/51000`)
    console.log("getContestDetails:::",contest);
    return contest;
  }

  getContestTeamPlayers(contestId:any):Observable<any>{
    const contestTeamPlayers= this.httpClient.get(`${this.apiUrl}/get-team-players/${contestId}`)
    console.log("contestTeamPlayers:::",contestTeamPlayers);
    return contestTeamPlayers;
  }
}
