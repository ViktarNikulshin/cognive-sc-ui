import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {
  private username: string;
 public isShowUser: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    if (sessionStorage.getItem('token') !== '') {
      this.username = sessionStorage.getItem('username');
      this.isShowUser = true;
    }
  }

  logout() {
    this.username = '';
    this.authenticationService.logOut();
    this.router.navigateByUrl('/login');
    this.isShowUser = false;
  }

}
