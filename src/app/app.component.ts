import {Component} from '@angular/core';
import {UsersService} from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})

export class AppComponent {
  title = 'cognive-sc-ui';
  users;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      console.log(data);


      this.users = data['results'];
    });
  }

}



