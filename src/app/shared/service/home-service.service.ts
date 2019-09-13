import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GET_HEADERS } from 'src/app/utilities/header.config';
import { Turn } from 'src/app/shared/dto/turn-dto';
import { Deal } from "src/app/shared/dto/deal-dto";

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  local = 'http://localhost:3000';
  server = 'http://3.90.33.1:8080/';
  baseUrl = this.server;
  constructor(
    private http: HttpClient
  ) { }

  getCards(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/start' , GET_HEADERS);
  }

  performTurn(turn: Turn): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/turn', turn,  GET_HEADERS);
  }

  askFriend(turn: Turn): Observable<any> {
   return this.http.post<any>(this.baseUrl + '/ask', turn,  GET_HEADERS);
  }

  deal(deal: Deal): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/deal', deal, GET_HEADERS);
  }
}
