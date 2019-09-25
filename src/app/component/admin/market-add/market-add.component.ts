import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MarketService} from '../../../service/market.service';
import {Market} from '../../../entity/market';
import {Router} from '@angular/router';

@Component({
  selector: 'app-market-add',
  templateUrl: './market-add.component.html',
  styleUrls: ['./market-add.component.css']
})
export class MarketAddComponent implements OnInit {
  angForm: FormGroup;
  market = new Market();

  constructor(private marketService: MarketService, private router: Router) {}

  ngOnInit() {
  }
  createMarket() {
    this.marketService.createMarket(this.market).subscribe(data => {
      console.log(data);
    }, msg => {
      console.log(msg);
    });
    console.log(this.market);
    this.market = new Market();
    this.router.navigate(['/admin/markets']);
  }
}
