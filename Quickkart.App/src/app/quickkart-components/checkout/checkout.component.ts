import { Component, OnInit } from '@angular/core';
import { UserService } from '../../quickkart-services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  email: string;
  orderId: string;
  errorMsg: string;
  showMsgDiv: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.email = sessionStorage.getItem('username');
    if (this.email == null) {
      this.router.navigate(['/landing']);
    }
  }

  ngOnInit(): void {
  }

  CheckOut() {
    console.log("Enter");
    this.userService.checkOut(this.email).subscribe(
      responseCheckoutData => {
        this.orderId = responseCheckoutData;
        console.log(this.orderId);
        this.router.navigate(['/orderSucceed', this.orderId]);
        if (this.orderId == null) {
          this.errorMsg = "Checkout failed";
          this.showMsgDiv = true;
        }
      },
      responseErrorData => {
        this.errorMsg = responseErrorData;
        this.showMsgDiv = true;
      }
    );
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userRole');
    this.router.navigate(['/home']);
  }
}
