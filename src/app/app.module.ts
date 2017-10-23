import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdListModule, MdSidenavModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {HomeComponent} from './home/home.component';
import {ServicesModule} from './services/services.module';
import {AuthenticatedGuard} from "./authenticated.guard";
import {UserComponent} from "./user/user.component";
import {StartComponent} from "./start/start.component";
import {FormsModule} from "@angular/forms";
import { UserDetailsComponent } from './user/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdListModule,
    ServicesModule,
    routes,
  ],
  providers: [
    AuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
