import {Component} from '@angular/core';
import {UsersService} from './users.service';
export interface User {
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})

export class AppComponent {

}
