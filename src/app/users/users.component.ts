import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users ;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
     this.userService.getUsers().subscribe(users => {
       console.log(users);
       this.users = users;
     });
  }

}
