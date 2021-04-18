import { Component, OnInit } from '@angular/core';
import { IProduct, ICategory, ICart } from '../../quickkart-interfaces/index';
import { ProductService } from '../../quickkart-services';
import { Router } from '@angular/router';

@Component({
  selector: 'view-products',
  templateUrl: './viewProducts.component.html',
  styleUrls: ['./viewProducts.component.css']
})

export class ViewProductsComponent {
  products: IProduct[];
  filteredProducts: IProduct[];
  categories: ICategory[];
  showMsgDiv: boolean;
  errorMsg: string;
  searchByProductName: string;
  searchByCategoryId: string = "0";
  email: string;
  status: string;
  message: string;
    
  constructor(private _productService: ProductService, private router: Router) {
    this.email = sessionStorage.getItem('username');
    if (this.email == null) {
      this.router.navigate(['/landing']);
    }
  }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(
        responseProductData => {
          this.products = responseProductData;
          console.log(this.products);
          this.filteredProducts = responseProductData;
          if (this.filteredProducts == null) {
            this.showMsgDiv = true;
            this.errorMsg = "No Products Available"
          }
        },
        responseErrorData => {
          this.filteredProducts = null;
          this.errorMsg = 'You are not authorised to view this page';
          console.log('You are not authorised to view this page');
          if (this.filteredProducts == null) {
            this.showMsgDiv = true;
          }
        });
  }

  searchProductByCategory(categoryId: string) {
    if (this.searchByProductName != null || this.searchByProductName == "") {
      this.filteredProducts = this.products.filter(prod => prod.ProductName.toLowerCase().indexOf(this.searchByProductName.toLowerCase()) >= 0);
    }
    else {
      this.filteredProducts = this.products;
    }
    this.searchByCategoryId = categoryId;
    if (this.searchByCategoryId == "0") {
      this.filteredProducts = this.products;
    }
    else {
      this.filteredProducts = this.filteredProducts.filter(prod => prod.CategoryId.toString() == this.searchByCategoryId);
    }
  }

  AddToCart(product: IProduct) {
    console.log("Button");
    var cartObj: ICart;
    cartObj = { CartId: null, ProductId: product.ProductId, EmailId: this.email, QuantityPurchased: 1, TotalAmount: null, OrderId: null, Status: null, OrderDate: null, ProductName: null, Price: null, QtyAvailable: null };
    this._productService.addToCart(cartObj).subscribe(
      responseAddToCart => {
        this.status = responseAddToCart;
        if (this.status == "1") {
          this.errorMsg = "Product is added to the cart.";
        }
        else {
          this.errorMsg = "Product addition failed. Try again later.";
        }
        this.showMsgDiv = true;
      },
      responseError => {
        console.log(responseError);
        this.errorMsg = "Some error occured";
        this.showMsgDiv = true;
      });
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userRole');
    this.router.navigate(['/home']);
  }

}
