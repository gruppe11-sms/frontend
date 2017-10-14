import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

export const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

export const routes = RouterModule.forChild(loginRoutes);
