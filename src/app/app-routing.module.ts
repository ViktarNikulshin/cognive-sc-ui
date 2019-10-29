import { NgModule} from '@angular/core';
import {  RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {EditComponent} from './editUser/edit.component';
import {UsersComponent} from './users/users.component';
import {RolesComponent} from './roles/roles.component';


const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'edit/:Id', component: EditComponent},
  {path: 'users', component: UsersComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'new', component: EditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
