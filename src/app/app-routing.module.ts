import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {MarketAddComponent} from './component/admin/market-add/market-add.component';
import {MarketGetComponent} from './component/admin/market-get/market-get.component';
import {CoinAddComponent} from './component/admin/coin-add/coin-add.component';
import {CoinGetComponent} from './component/admin/coin-get/coin-get.component';

const routes: Routes = [
  // admin
  {
    path: 'admin/market/create',
    component: MarketAddComponent
  },
  {
    path: 'admin/markets',
    component: MarketGetComponent
  },
  {
    path: 'admin',
    component: MarketGetComponent
  },
  {
    path: 'admin/coins',
    component: CoinGetComponent
  },
  {
    path: 'admin/coin/create',
    component: CoinAddComponent
  },
  {
    path: '',
    component: MarketGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
