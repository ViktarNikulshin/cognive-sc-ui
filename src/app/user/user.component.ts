import {Component, Input} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.scss']
})

export class UserComponent {

  @Input() users;
  user
  constructor() {}
  setUser(user) {
    this.user = user;
  }

}
