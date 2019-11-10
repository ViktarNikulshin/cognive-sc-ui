import {Component, OnInit} from '@angular/core';
import {UserService} from './service/user.service';
import {RolesService} from './service/roles.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from './service/authentication.service';
import {FormBuilder} from '@angular/forms';
import {CountryService} from './service/country.service';
import {NaviComponent} from './navi/navi.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ UserService, RolesService, AuthenticationService, CountryService, NaviComponent]
})

export class AppComponent implements OnInit {
  constructor(private userService: UserService, private http: HttpClient,
              private router: Router, private fb: FormBuilder, private countryService: CountryService) {
  }

  ngOnInit() {
  }
}
