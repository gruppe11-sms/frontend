import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {routes} from './user.routes';
import {MatFormFieldModule} from '@angular/material';
import { UserDetailChangePasswordComponent } from './user-details/user-detail-change-password/user-detail-change-password.component';

@NgModule({
  imports: [
    CommonModule,
    routes,
    MatFormFieldModule
  ],
  declarations: [
    UserComponent,
    UserDetailsComponent,
    UserDetailChangePasswordComponent
  ],
  providers: []
})
export class UserModule {
}
