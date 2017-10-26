import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AuthService} from './auth.service';
import {UserService} from "./user.service";
import {GroupService} from "./group.service";
import {TokenService} from "./token.service";

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
    TokenService,
  ],
})
export class ServicesModule {
}
