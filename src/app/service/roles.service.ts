import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class RolesService {

  constructor(private http: HttpClient) {

  }
  getRoles() {
    return this.http.get('https://viktornikulshin.outsystemscloud.com/BD/rest/v1/users');
  }
}
