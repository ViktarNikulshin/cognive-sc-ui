import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Token} from '../models/token';

@Injectable()
export class AuthenticationService {
  token: Token;

  constructor(private httpClient: HttpClient) {
  }

  authenticate(body) {
    return this.httpClient.post<Token>('http://localhost:8080/auth', body).subscribe(
      userData => {
        this.token = userData;
        sessionStorage.setItem('username', body.username);
        sessionStorage.setItem('token', 'Bearer ' + this.token.token);
        console.log(sessionStorage.getItem('token'))
        console.log(sessionStorage.getItem('username'));
        return userData;
      }
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
  }
}
