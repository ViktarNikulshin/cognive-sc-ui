import {Input, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {EditComponent} from './editUser/edit.component';
import {AppComponent, User} from './app.component';
import {UsersComponent} from './users/users.component';


const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'edit', component: EditComponent},
  {path: 'users', component: UsersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  @Input() users;
}

