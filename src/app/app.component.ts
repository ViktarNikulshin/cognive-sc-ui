import {Component, OnInit} from '@angular/core';
import {UsersService} from './service/users.service';
import {UserService} from './service/user.service';
import {RolesService} from './service/roles.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {FormBuilder} from '@angular/forms';
import {CountryService} from './service/country.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService, UserService, RolesService, AuthenticationService, CountryService]
})

export class AppComponent implements OnInit {
  constructor(private userService: UsersService, private http: HttpClient,
              private router: Router, private fb: FormBuilder, private countryService: CountryService) {
  }

  ngOnInit() {
  }
}
