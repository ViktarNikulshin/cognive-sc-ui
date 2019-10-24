import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {map} from 'rxjs/operators';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService, UserService]
})

export class AppComponent implements OnInit {
  constructor(private userService: UsersService) {}
  ngOnInit() {
    }
 }
