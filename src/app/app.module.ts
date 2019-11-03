import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SearchPipe} from './pipe/search.pipe';
import {EditComponent} from './editUser/edit.component';
import { UsersComponent } from './users/users.component';
import { NaviComponent } from './navi/navi.component';
import { UserItemComponent } from './user-item/user-item.component';
import { RolesComponent } from './roles/roles.component';
import {AuthenticationService} from './service/authentication.service';
import {httpInterceptorProviders} from './index';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchPipe,
    EditComponent,
    UsersComponent,
    NaviComponent,
    UserItemComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
