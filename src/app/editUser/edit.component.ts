import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../models/user';
import {CountryService} from '../service/country.service';

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
  countrys;
  isShowId = 'visible';

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private httpClient: HttpClient,
              private fb: FormBuilder,
              private countryService: CountryService) {
    this.userForm = this.fb.group({
      id: [''],
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
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.Id;
    this.countryService.getAllCountry().subscribe(countrys => {
      this.countrys = countrys;
    });
    console.log(this.id);
    if (this.id === 0) {
      this.isShowId = 'visible';
    } else {
      this.userService.getUser(this.route.snapshot.params.Id).subscribe(user => {
        this.user = user;
        this.isShowId = 'hidden';
        this.initForm();
      });
    }

    // this.initForm();
  }

  initForm() {
    console.log(this.user);
    this.userForm = this.fb.group({
      id: [this.user.id],
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
    console.log(this.userService.postUser(this.userForm.value));
  }
}
