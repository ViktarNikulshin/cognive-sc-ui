import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import {RouterModule} from '@angular/router';
import {EditComponent} from './editUser/edit.component';
import { UsersComponent } from './users/users.component';
import { NaviComponent } from './navi/navi.component';
import { UserItemComponent } from './user-item/user-item.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchPipe,
    EditComponent,
    UsersComponent,
    NaviComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
