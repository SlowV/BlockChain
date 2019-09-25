import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarketAddComponent } from './component/admin/market-add/market-add.component';
import { MarketGetComponent } from './component/admin/market-get/market-get.component';
import { CoinAddComponent } from './component/admin/coin-add/coin-add.component';
import { CoinGetComponent } from './component/admin/coin-get/coin-get.component';
import {RouterModule} from '@angular/router';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {CoinService} from './service/coin.service';
import {MarketService} from './service/market.service';

@NgModule({
  declarations: [
    AppComponent,
    MarketAddComponent,
    MarketGetComponent,
    CoinAddComponent,
    CoinGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CoinService, MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
