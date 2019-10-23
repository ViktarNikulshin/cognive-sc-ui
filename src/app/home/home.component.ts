import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UsersService]
})
  export class HomeComponent implements OnInit{
  users;
  searchStr = '';
  size;

  constructor(private usersService: UsersService) {
    this.usersService.getUsers();
    console.log();
  }
  ngOnInit() {

  }
}
