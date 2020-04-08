import { NavbarComponent } from './navbar/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AllComponentModule } from './module/all-component.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import '@angular/localize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OrderWisePolicyComponent } from './order/order-wise-policy/order-wise-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderWisePolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AllComponentModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
