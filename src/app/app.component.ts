import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})

export class AppComponent implements OnInit {
  constructor(private userService: UsersService) {}
  ngOnInit() {
    }
 }
