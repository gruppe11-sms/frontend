import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthenticationGuard} from './services/guards/authentication.guard';
import {RoleGuard} from './services/guards/role.guard';
import {AuditViewRole} from './consts';
import {MeResolver} from './services/resolvers/me.resolver';
import {ComingAssignmentsResolver} from './home/coming-assignments.resolver';
import {CourseListResolver} from './services/resolvers/course-list.resolver';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    data: {
      animation: 'home',
    },
    resolve: {
      me: MeResolver,
      assignments: ComingAssignmentsResolver,
      courses: CourseListResolver,
    },
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
    data: {
      animation: 'login',
    },
  },
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule',
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'audit',
    loadChildren: 'app/audit/audit.module#AuditModule',
    canActivate: [AuthenticationGuard, RoleGuard],
    data: {
      roles: [AuditViewRole],
    },
  },
  {
    path: 'administration',
    loadChildren: 'app/administration/administration.module#AdministrationModule',
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'calendar',
    loadChildren: 'app/calendar/calendar.module#CalendarModule',
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'courses',
    loadChildren: 'app/course/course.module#CourseModule',
    canActivate: [AuthenticationGuard],
  },
  { // THIS HAS TO BE LAST, DO NOT FAIL WHERE I HAVE FALLEN
    path: '**',
    redirectTo: '',
  },
];

export const routes = RouterModule.forRoot(appRoutes);
