import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService]
})
  export class HomeComponent implements OnInit{
  users;
  searchStr = '';
  size;

  constructor(private userService: UserService) {
    this.userService.getUsers();
    console.log();
  }
  ngOnInit() {

  }
}
