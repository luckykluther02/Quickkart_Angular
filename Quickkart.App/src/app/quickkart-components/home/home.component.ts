import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: string;
  constructor(private router: Router) {
    this.email = sessionStorage.getItem('username');
    if (this.email == null) {
      this.router.navigate(['/landing']);
    }}

  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userRole');
    this.router.navigate(['/home']);
  }


}
