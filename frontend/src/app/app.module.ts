import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {CartComponent} from "./components/cart/cart.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    UserDetailComponent

    // other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,

    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
