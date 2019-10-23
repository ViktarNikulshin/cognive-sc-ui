import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {map} from 'rxjs/operators';
export class User {
  constructor(public id: number,
              public firstName: string,
              public lastName: string,
              public middleName: string,
              public email: string,
              public phoneNumber: string) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})

export class AppComponent implements OnInit{
  public users: User [] ;
  constructor(private userService: UsersService){}
  ngOnInit() {
    // this.userService.getUsers().subscribe((users) => {this.users = users['results'];
    }
 }
