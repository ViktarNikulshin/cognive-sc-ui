import { Component } from '@angular/core';
import {UsersService} from '../users.service';
@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  export class HomeComponent {
  title = 'cognive-sc-ui';
  users = [];
  searchStr = '';
  size;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data['results'];
    });
  }
  onChange() {

  }

}
