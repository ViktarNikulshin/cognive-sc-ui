
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService {
  size = 8

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+ this.size+'&nat=gb');
  }
  setSize(size) {
    this.size = size;
  }
}
