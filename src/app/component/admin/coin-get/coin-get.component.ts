import { Component, OnInit } from '@angular/core';
import {Coin} from '../../../entity/coin';
import {CoinService} from '../../../service/coin.service';

@Component({
  selector: 'app-coin-get',
  templateUrl: './coin-get.component.html',
  styleUrls: ['./coin-get.component.css']
})
export class CoinGetComponent implements OnInit {
  coinList: Coin[];
  coin: Coin;
  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getList().subscribe((data) => {
      this.coinList = data.datas[0];
    });
  }

}
