import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthenticationGuard} from './services/authentication.guard';
import {RoleGuard} from './services/role.guard';
import {AuditViewRole} from './consts';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
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
