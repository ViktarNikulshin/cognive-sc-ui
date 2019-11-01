import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable, Input, OnInit} from '@angular/core';
import {User} from "../models/user";


@Injectable()
export class UserService {
  user: User;
  constructor(private http: HttpClient) {
  }

  getUser(id: number) {
    return this.http.get('http://localhost:8080/user/' + id + '');
  }
  postUser(user) {
    this.http.post('http://localhost:8080/user/create', this.user);
  }
}
