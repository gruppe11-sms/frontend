import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatListModule, MatSidenavModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {HomeComponent} from './home/home.component';
import {ServicesModule} from './services/services.module';
import {StartComponent} from './start/start.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './services/auth-inteceptor';
import {HomeUserdetailComponent} from './home/home-userdetail/home-userdetail.component';
import {ControlsModule} from './controls/controls.module';
import {HomeCourseDetailComponent} from './home/home-course-detail/home-course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    HomeUserdetailComponent,
    HomeCourseDetailComponent,
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    ServicesModule,
    ControlsModule,
    routes,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
