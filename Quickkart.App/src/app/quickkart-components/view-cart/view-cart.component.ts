import { Component, OnInit } from '@angular/core';
import { UserService } from '../../quickkart-services';
import { ICart, IProduct } from '../../quickkart-interfaces/index';
import { Router } from '@angular/router';

@Component({
  selector: 'view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  email: string;
  cart: ICart[];
  errorMsg: string;
  showMsgdiv: boolean;
  status: string;
  message: string;

  constructor(private userService: UserService, private router: Router) {
    this.email = sessionStorage.getItem('username');
    if (this.email == null)
      {
        this.router.navigate(['/landing']);
      }
  }



  ngOnInit(): void {
    this.userService.getCart(this.email).subscribe(
      responseCartData => {
        this.cart = responseCartData;
        console.log(this.cart);
        if (this.cart == null || this.cart.length == 0) {
          this.errorMsg = "Cart is Empty";
          this.showMsgdiv = true;
        }
      },
      responseErrorData => {
        this.cart = null;
        this.errorMsg = "Some Error occured. Please try again";
        this.showMsgdiv = true;
      }
    );
  }


  UpdateCart(cart: ICart) {
    console.log("Enter");
    this.router.navigate(['/updateCart', cart.ProductId, cart.ProductName,  cart.QuantityPurchased]);
  }

  DeleteCart(cart: ICart) {
    this.userService.deleteFromCart(this.email, cart.ProductId).subscribe(
      responseDeleteData => {
        this.status = responseDeleteData;
        if (this.status == "1") {
          window.location.reload();
          alert("Product deleted from cart");
        }
        else {
          this.errorMsg = "Deletion failed";
        }
      },
      responseErrorData => {
        this.status = responseErrorData;
        this.errorMsg = "Some problem occured. Please ry after sometime.";
        this.showMsgdiv = true;
      }
      )
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userRole');
    this.router.navigate(['/home']);
  }

}
