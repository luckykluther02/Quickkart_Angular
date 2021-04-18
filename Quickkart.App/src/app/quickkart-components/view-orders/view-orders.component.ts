import { Component, OnInit } from '@angular/core';
import { UserService } from '../../quickkart-services/index';
import { ICart } from '../../quickkart-interfaces/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  email: string;
  cart: ICart[];
  errorMsg: string;
  showMsgDiv: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.email = sessionStorage.getItem('username');
    if (this.email == null) {
      this.router.navigate(['/landing']);
    }
  }

  ngOnInit(): void {
    this.userService.getOrders(this.email).subscribe(
      responseOrderData => {
        this.cart = responseOrderData;
        console.log(this.cart);
        if (this.cart == null || this.cart.length == 0) {
          this.errorMsg = "Order is not fetched properly.";
          this.showMsgDiv = true;
        }
      },
      responseErrorData => {
        this.cart = null;
        this.errorMsg = responseErrorData;
        this.showMsgDiv = true;
      });
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userRole');
    this.router.navigate(['/home']);
  }

}
