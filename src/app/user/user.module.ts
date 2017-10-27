import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from "./user.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {routes} from "./user.routes";
import {JwtHelper} from "angular2-jwt";

@NgModule({
  imports: [
    CommonModule,
    routes
  ],
  declarations: [
    UserComponent,
    UserDetailsComponent
  ],
  providers: []
})
export class UserModule {
}
