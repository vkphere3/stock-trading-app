import { Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuyStockComponent } from './components/buy-stock/buy-stock.component';
import { SellStockComponent } from './components/sell-stock/sell-stock.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const APP_ROUTES: Routes = [{
    path: "",                             // http://localhost:4200
    redirectTo: "login",
    pathMatch: "full"
}, {
    path: "login",                        // http://localhost:4200/login
    component: LoginComponent
}, {
    path: "register",
    component: SignupComponent
}, {
    path: "dashboard",
    component: DashboardComponent
}, {
    path: "portfolio",
    component: PortfolioComponent
}, {
    path: "stocks",
    component: BuyStockComponent,
    children: [{
        path: "",
        redirectTo: "buy",
        pathMatch: "full"
    }, {
        path: "buy",
        component: BuyStockComponent
    }, {
        path: "sell",
        component: SellStockComponent
    }]
}]