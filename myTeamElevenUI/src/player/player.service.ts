import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import {baseUrl} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient:HttpClient) { }
  apiUrl='http://localhost:3000/player'

  getAllPlayers():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/get-all-players`)
    }
  }
