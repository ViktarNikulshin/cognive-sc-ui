
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {
  users: [];
    constructor(private http: HttpClient) {
  }

  getUsers() {
   return  this.http.get('https://viktornikulshin.outsystemscloud.com/BD/rest/v1/users');
  }
}
