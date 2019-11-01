import { Component, OnInit } from '@angular/core';
import {RolesService} from '../service/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [RolesService]
})
export class RolesComponent implements OnInit {
  roles;

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.rolesService.getRoles().subscribe(roles =>{this.roles = roles});
  }

}
