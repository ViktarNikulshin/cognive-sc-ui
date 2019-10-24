import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable, Input, OnInit} from '@angular/core';

@Injectable()
export class UserService  {
    constructor(private http: HttpClient) {
  }

  getUser( id: number) {
    return  this.http.get('https://viktornikulshin.outsystemscloud.com/BD/rest/v1/GetUser?UserId=' + id + '');
  }
}
