import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {MeResolver} from '../services/resolvers/me.resolver';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    data: {
      animation: 'me',
    },
    resolve: {
      me: MeResolver,
    },
  },
];

export const routes = RouterModule.forChild(userRoutes);
