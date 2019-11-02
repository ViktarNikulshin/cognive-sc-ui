import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  users: User [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
     this.userService.getUsers().subscribe(users => {
       console.log(users);
       this.users = users;
     });
  }

}
