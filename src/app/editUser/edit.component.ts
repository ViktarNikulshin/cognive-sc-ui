import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../models/user';
import {async} from '@angular/core/testing';

@Component({
  selector: 'edit-app',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [UserService]

})

export class EditComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  id: number;

  constructor(private userService: UserService, private route: ActivatedRoute, private httpClient: HttpClient, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      login: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
      middleName: [''],
      email: [''],
      phoneNumber: [''],
      country: [''],
      city: [''],
      street: [''],
      house: [''],
      flat: [''],
    });
    this.id = this.route.snapshot.params.Id;
      }
  ngOnInit() {
    console.log(this.id);
    if (this.id !== 0) {
      this.userService.getUser(this.route.snapshot.params.Id).subscribe(user => {
        this.user = user;
        this.initForm();
      });
    }

    // this.initForm();
  }

  initForm() {
    console.log(this.user);
    this.userForm = this.fb.group({
      login: [this.user.login],
      password: [this.user.password],
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      middleName: [this.user.middleName],
      email: [this.user.email],
      phoneNumber: [this.user.phoneNumber],
      country: [this.user.country],
      city: [this.user.city],
      street: [this.user.street],
      house: [this.user.house],
      flat: [this.user.flat],
    });
  }

  postData() {
    return this.httpClient.post('http://localhost:8080/user/create', this.user).subscribe(response => {
      console.log(response);
    });
  }
}
