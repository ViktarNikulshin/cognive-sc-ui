
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './app.component';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService {
  users: [];
  size = 8;

  constructor(private http: HttpClient) {
  }

  getUsers() {
    this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb').pipe(map(response => {return this.users}));
  }
}
