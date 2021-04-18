import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService, UserService, AuthenticationService } from './quickkart-services/index';
import { ViewProductsComponent } from './quickkart-components/view-products/viewProducts.component';
import { ViewCartComponent } from './quickkart-components/view-cart/view-cart.component';
import { LoginComponent } from './quickkart-components/login/login.component';
import { UpdateCartComponent } from './quickkart-components/update-cart/update-cart.component';
import { CheckoutComponent } from './quickkart-components/checkout/checkout.component';
import { ViewOrdersComponent } from './quickkart-components/view-orders/view-orders.component';
import { OrdersucceedComponent } from './quickkart-components/ordersucceed/ordersucceed.component';
import { RegisterComponent } from './quickkart-components/register/register.component';
import { HomeComponent } from './quickkart-components/home/home.component';
import { LandingPageComponent } from './quickkart-components/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent, ViewProductsComponent, ViewCartComponent, LoginComponent, UpdateCartComponent, CheckoutComponent, OrdersucceedComponent, ViewOrdersComponent, ViewOrdersComponent, RegisterComponent, HomeComponent, LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProductService, UserService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
