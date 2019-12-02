import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { BuyStockComponent } from './components/buy-stock/buy-stock.component';
import { SellStockComponent } from './components/sell-stock/sell-stock.component';
import { HeaderComponent } from './components/header/header.component';
import { APP_ROUTES } from './app.routes';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    BuyStockComponent,
    SellStockComponent,
    HeaderComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
