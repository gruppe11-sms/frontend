import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedGuard} from './authenticated.guard';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
  },
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule',
  },
  {
    path: 'audit',
    loadChildren: 'app/audit/audit.module#AuditModule'
  },
  {
    path: 'administration',
    loadChildren: 'app/administration/administration.module#AdministrationModule'
  },
  {
    path: 'courses',
    loadChildren: 'app/course/course.module#CourseModule'
  },
  { //THIS HAS TO BE LAST, DO NOT FAIL WHERE I HAVE FALLEN
    path: '**',
    redirectTo: '',
  },
];

export const routes = RouterModule.forRoot(appRoutes);
