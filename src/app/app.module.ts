import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule, MatSidenavModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {HomeComponent} from './home/home.component';
import {ServicesModule} from './services/services.module';
import {AuthenticatedGuard} from "./authenticated.guard";
import {StartComponent} from "./start/start.component";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./services/auth-inteceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    ServicesModule,
    routes,
  ],
  providers: [
    AuthenticatedGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
