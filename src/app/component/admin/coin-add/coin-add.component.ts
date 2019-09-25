import { Component, OnInit } from '@angular/core';
import {Coin} from '../../../entity/coin';
import {CoinService} from '../../../service/coin.service';
import {MarketService} from '../../../service/market.service';
import {Market} from '../../../entity/market';

@Component({
  selector: 'app-coin-add',
  templateUrl: './coin-add.component.html',
  styleUrls: ['./coin-add.component.css']
})
export class CoinAddComponent implements OnInit {
  coin = new Coin();
  markets: Market[];
  constructor(private coinService: CoinService, private marketService: MarketService) { }

  ngOnInit() {
    this.marketService.getList().subscribe(data => {
      this.markets = data.datas;
    });
  }

  createCoin() {
    this.coinService.createCoin(this.coin).subscribe(data => {
      console.log(data);
    });
    this.coin = new Coin();
  }
}
