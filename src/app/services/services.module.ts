import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {GroupService} from './group.service';
import {RoleService} from './role.service';
import {TokenService} from './token.service';
import {JwtHelper} from 'angular2-jwt';
import {AuthenticationGuard} from './authentication.guard';
import {RoleGuard} from './role.guard';
import {PermissionService} from './permission.service';
import {ActivityService} from './activity.service';
import {AssignmentService} from './assignment.service';
import {MeService} from './me.service';
import {CourseService} from './course.service';
import {AuthInterceptor} from './auth-inteceptor';

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
    AuthenticationGuard,
    RoleGuard,
    PermissionService,
    ActivityService,
    AssignmentService,
    MeService,
    CourseService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
})
export class ServicesModule {
}
