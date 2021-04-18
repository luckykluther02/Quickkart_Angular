import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCartComponent } from './quickkart-components/view-cart/view-cart.component';
import { ViewProductsComponent } from './quickkart-components/view-products/viewProducts.component';
import { LoginComponent } from './quickkart-components/login/login.component';
import { UpdateCartComponent } from './quickkart-components/update-cart/update-cart.component';
import { CheckoutComponent } from './quickkart-components/checkout/checkout.component';
import { OrdersucceedComponent } from './quickkart-components/ordersucceed/ordersucceed.component';
import { ViewOrdersComponent } from './quickkart-components/view-orders/view-orders.component';
import { RegisterComponent } from './quickkart-components/register/register.component';
import { HomeComponent } from './quickkart-components/home/home.component';
import { LandingPageComponent } from './quickkart-components/landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'viewCart', component: ViewCartComponent },
  { path: 'viewProduct', component: ViewProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'updateCart/:prodId/:productName/:quantity', component: UpdateCartComponent },
  { path: 'checkOut', component: CheckoutComponent },
  { path: 'orderSucceed/:orderid', component: OrdersucceedComponent },
  { path: 'viewOrders', component: ViewOrdersComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
