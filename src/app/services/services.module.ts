import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AuthService} from './auth.service';
import {UserService} from "./user.service";
import {GroupService} from "./group.service";
import {RoleService} from "./role.service";
import {TokenService} from "./token.service";
import {JwtHelper} from "angular2-jwt";
import {AuthenticationGuard} from "./authentication.guard";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    AuthService,
    UserService,
    GroupService,
    RoleService,
    GroupService,
    TokenService,
    JwtHelper,
    AuthenticationGuard
  ],
})
export class ServicesModule {
}
