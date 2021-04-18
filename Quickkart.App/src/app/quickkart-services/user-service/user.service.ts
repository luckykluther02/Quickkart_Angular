import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser, ICart } from '../../quickkart-interfaces/index';
import { Observable } from 'rxjs';
import { Local } from 'protractor/built/driverProviders';
import { AuthenticationService } from '../authentication-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private auth: AuthenticationService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  registerUser(user: IUser): Observable<any> {
    return this._http.post<IUser>('https://localhost:44373/api/User/RegisterUser', user, this.httpOptions);
  }

  getCart(id: string): Observable<any> {
    let cartUrl = 'https://localhost:44373/api/User/ViewCart';
    const url = `${cartUrl}?email=${id}`;

    return this._http.get<ICart[]>(url, this.httpOptions);
  }

  deleteFromCart(id: string, prodId: string) {
    let cartUrl = 'https://localhost:44373/api/User/DeleteCart';
    const url = `${cartUrl}?email=${id}&prodId=${prodId}`;
    return this._http.delete<any>(url, this.httpOptions);
  }

  checkOut(id: string) {
    let cartUrl = 'https://localhost:44373/api/User/ProductOrder';
    const url = `${cartUrl}?emailId=${id}`;
    return this._http.post<any>(url, this.httpOptions);
  }

  getOrders(id: string): Observable<any> {
    let cartUrl = 'https://localhost:44373/api/User/ViewOrders';
    const url = `${cartUrl}?emailId=${id}`;
    var reqheaders = new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', 'Bearer ' + this.auth.getToken());

    return this._http.get<ICart[]>(url, { headers: reqheaders });
  }
}
