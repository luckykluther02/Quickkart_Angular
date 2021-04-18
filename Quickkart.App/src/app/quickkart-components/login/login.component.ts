import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from '../../quickkart-services';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewCartComponent } from '../view-cart/view-cart.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  constructor(private auth: AuthenticationService, private router: Router) {
    this.email = sessionStorage.getItem('username');
  }

  ngOnInit(): void {
  }

  status: string;
  errorMsg: string;
  res: boolean = false;
  err: boolean = false;
  isLoggedIn: boolean;
  globalResponse: any;

  submitLoginForm(form: NgForm) {
    this.isLoggedIn = false;
    this.auth.removeToken();
    console.log(form.value.email);
    this.auth.validateCredentials(form.value.email, form.value.pwd)
      .subscribe(
        result => {
          this.globalResponse = result;
          sessionStorage.setItem('username', form.value.email);
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error.message);
          this.err = true;
        },
        () => {
          console.log(this.globalResponse);
          this.auth.storeToken(this.globalResponse.access_token);
          this.isLoggedIn = true;
          console.log(this.globalResponse.access_token);
        }
      );

    //  this.userService.validateCredentials(form.value.email, form.value.pwd)
    //    .subscribe(
    //      responseLoginStatus => {
    //        this.status = responseLoginStatus;
    //        if (this.status == "1") {
    //          this.res = true;
    //          sessionStorage.setItem('username', form.value.email);
    //          sessionStorage.setItem('userRole', this.status);
    //          this.router.navigate(['/home']);
    //        }
    //        else {
    //          this.err = true;
    //        }
    //        console.log(this.status);
    //      },
    //      responseLoginError => {
    //        this.errorMsg = responseLoginError;
    //        this.err = true;
    //      },
    //      () => console.log('Submit Login method executed successfully')
    //    );
    //}
  }
}
