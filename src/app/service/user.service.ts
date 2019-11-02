import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable, Input, OnInit} from '@angular/core';
import {User} from "../models/user";
import {log} from 'util';
import {Observable} from 'rxjs';


@Injectable()
export class UserService {
  user: User;
  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable <User> {
    if(id !== 0) {
      return this.http.get<User>('http://localhost:8080/user/' + id + '');
    }
  }
  getUsers(): Observable<any>{
    return  this.http.get<User []>('http://localhost:8080/user/users');
  }
  postUser(user: User) {
    console.log(user);
    return  this.http.post('http://localhost:8080/user/update', user);
  }
}
