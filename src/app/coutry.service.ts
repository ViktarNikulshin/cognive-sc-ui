import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from './models/country';

@Injectable()
export class CoutryService {
  constructor(private http: HttpClient) {}
  getAllCountry() {
    return this.http.get('http://localhost:8080/country/all');
  }
}
