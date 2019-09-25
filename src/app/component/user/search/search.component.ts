import {Component, OnInit} from '@angular/core';
import {CoinService} from '../../../service/coin.service';
import {MarketService} from '../../../service/market.service';
import {Coin} from '../../../entity/coin';
import {Market} from '../../../entity/market';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  coins: Coin[];
  markets: Market[];

  constructor(private coinService: CoinService, private marketService: MarketService) {
  }

  ngOnInit() {
    this.coinService.getList().subscribe(data => {
      this.coins = data.datas[0];
    });
    this.marketService.getList().subscribe(data => {
      this.markets = data.datas;
    });
  }

  changeOption(id) {
   this.coinService.getListByMarketId(id).subscribe(data => {
     this.coins = data.datas[0];
   });
  }

  search(keyword: HTMLInputElement) {
     this.coinService.getListByKeyword(keyword.value).subscribe(data => {
       this.coins = data.datas[0];
     });
  }
}
