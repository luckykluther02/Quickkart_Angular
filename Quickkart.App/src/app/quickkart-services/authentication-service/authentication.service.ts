import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser, ICart } from '../../quickkart-interfaces/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  validateCredentials(id: string, password: string): Observable<any> {
    let url: string = "https://localhost:44373";
    var user = "username=" + id + "&password=" + password + "&grant_type=password";


    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    //let cartUrl = 'https://localhost:44373/api/User/UserLogin';
    //const url = `${cartUrl}?EmailId=${id}&Password=$password`

    //var user: IUser;
    //user = { EmailId: id, FirstName: null, LastName: null, Password: password, Gender: null, Mobile: null, RoleId: null, DateOfBirth: null, Address: null };
    return this._http.post(url + '/token', user, httpOptions);
  }

  public isAuthenticated(): boolean {
    return this.getToken()! == null;
  }

  storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    return localStorage.removeItem("token");
  }

}
