import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

import {UserService} from './user.service';
import {RolesService} from './roles.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService, UserService, RolesService, AuthenticationService]
})

export class AppComponent implements OnInit {
  constructor(private userService: UsersService, private http: HttpClient, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    }
 }
