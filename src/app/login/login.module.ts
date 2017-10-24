import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {routes} from './login.routes';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    routes,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {
}
