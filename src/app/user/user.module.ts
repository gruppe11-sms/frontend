import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from "./user.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {routes} from "./user.routes";

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
