import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ordersucceed',
  templateUrl: './ordersucceed.component.html',
  styleUrls: ['./ordersucceed.component.css']
})
export class OrdersucceedComponent implements OnInit {

  orderId: string;
  email: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.orderId = this.route.snapshot.params['orderid'];
    this.email = sessionStorage.getItem('username');
    if (this.email == null) {
      this.router.navigate(['/landing']);
    }
  }

  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userRole');
    this.router.navigate(['/home']);
  }

}
