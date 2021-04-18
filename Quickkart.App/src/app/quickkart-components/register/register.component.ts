import { Component, OnInit } from '@angular/core';
import { UserService } from '../../quickkart-services/index';
import { NgForm } from '@angular/forms';
import { IUser } from '../../quickkart-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  status: string;
  errorMessage: string;
  showMsgDiv: boolean;
  email: string;
  constructor(private userService: UserService, private router: Router) {
    this.email = sessionStorage.getItem('username');
  }

  ngOnInit(): void {
  }

  registerUser(form: NgForm) {
    var user = { EmailId: form.value.email, FirstName: form.value.firstname, LastName: form.value.lastname, Password: form.value.pwd, Gender: form.value.gender, Mobile: form.value.mobile, RoleId: null, DateOfBirth: form.value.dateofbirth, Address: form.value.address };
    console.log(form.value.email, form.value.firstname, form.value.lastname, form.value.pwd, form.value.gender, form.value.mobile, form.value.dateofbirth, form.value.address );
    this.userService.registerUser(user).subscribe(
      responseRegisterData => {
        console.log("Enter");
        this.status = responseRegisterData;
        console.log(this.status);
        if (this.status == "1") {
          alert("Registration successful");
        }
        else {
          this.showMsgDiv = true;
          this.errorMessage = "Some problem occured in registering."
        }
      },
      responseErrorData => {
        this.status = responseErrorData;
        this.errorMessage = "Registration failed. Please try after sometime."
        this.showMsgDiv = true;
      }
    );
  }

}
