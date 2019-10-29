
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {
     constructor(private http: HttpClient) {
  }

  getUsers() {
   return  this.http.get('http://localhost:8080/user/users');
  }
}
