import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {GroupService} from './services/group.service';
import {RoleService} from './services/role.service';
import {TokenService} from './services/token.service';
import {JwtHelper} from 'angular2-jwt';
import {AuthenticationGuard} from './guards/authentication.guard';
import {RoleGuard} from './guards/role.guard';
import {PermissionService} from './services/permission.service';
import {ActivityService} from './services/activity.service';
import {AssignmentService} from './services/assignment.service';
import {MeService} from './services/me.service';
import {CourseService} from './services/course.service';
import {AuthInterceptor} from './inteceptors/auth-inteceptor';
import {MeResolver} from './resolvers/me.resolver';
import {GroupListResolver} from './resolvers/group-list.resolver';
import {UserListResolver} from './resolvers/user-list.resolver';
import {UserResolver} from './resolvers/user.resolver';
import {RoleListResolver} from './resolvers/role-list.resolver';
import {CourseListResolver} from './resolvers/course-list.resolver';
import {CourseResolver} from './resolvers/course.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
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
        MeResolver,
        GroupListResolver,
        UserListResolver,
        UserResolver,
        RoleListResolver,
        CourseListResolver,
        CourseResolver,
      ],
    };
  }
}
