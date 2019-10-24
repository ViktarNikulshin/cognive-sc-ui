import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'edit-app',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [UserService]

})

export class EditComponent implements OnInit {
  user
  userId = 2;
  constructor(private userService: UserService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.params.Id);
  }
  ngOnInit() {
    this.userService.getUser(this.route.snapshot.params.Id).subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }
}
