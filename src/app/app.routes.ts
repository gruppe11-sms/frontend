import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedGuard} from './authenticated.guard';
import {HomeComponent} from './home/home.component';
import {UserComponent} from "./user/user.component";

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
    component: UserComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const routes = RouterModule.forRoot(appRoutes);
