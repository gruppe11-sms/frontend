import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {routes} from './user.routes';
import {MatButtonModule, MatDialog, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { UserDetailChangePasswordComponent } from './user-details/user-detail-change-password/user-detail-change-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    routes,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    UserComponent,
    UserDetailsComponent,
    UserDetailChangePasswordComponent
  ],
  providers: [],
  entryComponents: [
    UserDetailChangePasswordComponent
  ]
})
export class UserModule {
}
