import { Component, OnInit } from '@angular/core';
import {Market} from '../../../entity/market';
import {MarketService} from '../../../service/market.service';

@Component({
  selector: 'app-market-get',
  templateUrl: './market-get.component.html',
  styleUrls: ['./market-get.component.css']
})
export class MarketGetComponent implements OnInit {
  markets: Market[];
  constructor(private marketService: MarketService) { }

  ngOnInit() {
    this.marketService
      .getList()
      .subscribe((data) => {
        this.markets = data.datas;
      });
  }

}
