import { Injectable } from '@angular/core';
import {Coin} from '../entity/coin';
import {Market} from '../entity/market';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private baseUrl = 'http://localhost:1998/api/v1/markets';

  constructor(private http: HttpClient,  private router: Router) { }

  // @ts-ignore
  createMarket(market: Market): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    console.log(market);
    return this.http.post(this.baseUrl, market, {headers});
  }

  getList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
