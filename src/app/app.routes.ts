import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeListComponent } from './trade/trade-list/trade-list.component';
import { CreateTradeComponent } from './trade/create-trade/create-trade.component';
import { BillListComponent } from './billing/bill-list/bill-list.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'create-trade', component: CreateTradeComponent},
    {path: 'trade-list', component: TradeListComponent},

    {path: 'bill-list', component: BillListComponent}

];
