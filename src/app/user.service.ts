import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable, Input, OnInit} from '@angular/core';
import {User} from './models/user';
import {async} from '@angular/core/testing';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:8080/user/' + id + '');
  }
}
