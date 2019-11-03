import { Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
   loginForm: FormGroup;

  constructor( private fb: FormBuilder, private route: ActivatedRoute,
               private httpClient: HttpClient, private authenticationService: AuthenticationService) {
    this.loginForm = this.fb.group({
      username:[''],
      password:['']
  } );
  }
  checkLogin(){
    console.log(this.loginForm.value);
    console.log(this.authenticationService.authenticate(this.loginForm.value));
  }
}
