import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Coin} from '../entity/coin';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private baseUrl = 'http://localhost:1998/api/v1/coins';

  constructor(private http: HttpClient) {
  }

  createCoin(coin: Coin): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post(this.baseUrl, coin, {headers});
  }

  getList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
