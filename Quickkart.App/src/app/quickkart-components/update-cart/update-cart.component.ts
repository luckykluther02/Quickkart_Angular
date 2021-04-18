import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../quickkart-services/index';

@Component({
  selector: 'app-update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent implements OnInit {

  price: number;
  prodName: string;
  qtyPurchased: number;
  user: string;
  status: string;
  errorMsg: string;
  showMsgDiv: boolean;
  prodId: string;
  qtyAvailable: number;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    console.log("ctor");
    this.user = sessionStorage.getItem('username');
    if (this.user == null) {
      this.router.navigate(['/landing']);
    }
  }

  ngOnInit(): void {
    this.prodId = this.route.snapshot.params['prodId'];
    this.prodName = this.route.snapshot.params['productName'];
    this.qtyPurchased = parseInt(this.route.snapshot.params['quantity']);
    this.qtyAvailable = parseInt(this.route.snapshot.params['quantity']);
  }

  updateCart(qty: number) {
    console.log("Update");
    this.productService.updateCart(this.user, this.prodId, qty).subscribe(
      responseUpdateData => {
        this.status = responseUpdateData;
        if (this.status == "1") {
          alert("Update Successful");
          this.showMsgDiv = true;
          this.router.navigate(['/viewCart']);
        }
        else {
          this.errorMsg = "Update failed";
          this.showMsgDiv = true;
        }
      },
      responseErrorData => {
        this.errorMsg = "Some error occured. Please try after sometime."
        console.log(responseErrorData);
      });
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userRole');
    this.router.navigate(['/home']);
  }


}
