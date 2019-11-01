import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CountryService {
  constructor(private http: HttpClient) {}
  getAllCountry() {
    return this.http.get('http://localhost:8080/country/countries');
  }
}
