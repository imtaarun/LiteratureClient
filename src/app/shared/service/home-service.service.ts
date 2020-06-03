import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GET_HEADERS } from 'src/app/utilities/header.config';
import { Turn } from 'src/app/shared/dto/turn-dto';
import { Deal } from "src/app/shared/dto/deal-dto";
import { CryptoJS } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  local = 'http://localhost:8080';
  server = 'http://3.16.56.71:8080';
  baseUrl = this.local;
  constructor(
    private http: HttpClient
  ) { }

  encrypt(message) {
    return CryptoJS.AES.encrypt(message, 'lit');
  }
  decrypt(message) {
    return CryptoJS.AES.decrypt(message, 'lit');
  }

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

  generate(n) {
    var add = 1;
    var max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
    if ( n > max ) {
            return this.generate(max) + this.generate(n - max);
    }
    max        = Math.pow(10, n+add);
    var min    = max/10; // Math.pow(10, n) basically
    var number = Math.floor( Math.random() * (max - min + 1) ) + min;
    return ("" + number).substring(add); 
}
}
