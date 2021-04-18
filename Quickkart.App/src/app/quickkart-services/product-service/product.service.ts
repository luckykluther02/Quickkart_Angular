import { Injectable } from '@angular/core';
import { IProduct, ICategory, ICart } from '../../quickkart-interfaces/index';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { UserService } from '../user-service/user.service';
import { AuthenticationService } from '../authentication-service/authentication.service';


@Injectable()
export class ProductService {

  constructor(private _http: HttpClient, private auth: AuthenticationService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getProducts(): Observable<IProduct[]> {
    console.log('getProducts');
    var reqheaders = new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', 'Bearer ' + this.auth.getToken());
    //if (this.token) {
    //  reqheaders.append('Authorization', 'Bearer' + this.token);
    //}
    console.log(reqheaders);
    return this._http.get<IProduct[]>('https://localhost:44373/api/User/ViewProduct', { headers: reqheaders});
  }

  addToCart(cart: ICart) {
    return this._http.post<any>('https://localhost:44373/api/User/AddToCart', cart, this.httpOptions);
  }

  updateCart(id: string, prodId: string, qty: number) {
    var cartObj = { ProductName: null, Price: null, QuantityPurchased: qty, TotalAmount: null, ProductId: prodId, EmailId: id };
    return this._http.put<any>('https://localhost:44373/api/User/UpdateCart', cartObj, this.httpOptions);
  }
}
