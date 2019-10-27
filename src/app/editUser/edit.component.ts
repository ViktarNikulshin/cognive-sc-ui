import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'edit-app',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [UserService]

})

export class EditComponent implements OnInit {
  user = {};
    constructor(private userService: UserService, private route: ActivatedRoute, private httpClient: HttpClient) {
    console.log(this.route.snapshot.params.Id);
  }
  ngOnInit() {
    this.userService.getUser(this.route.snapshot.params.Id).subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }
    pastData(){
      return this.httpClient.post('', this.user).subscribe(response =>{console.log(response)});
    }
}
