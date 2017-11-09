import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from './add_user/add-user.component';
import {AdministrationComponent} from './administration/administration.component';
import {EditUserFilterComponent} from './edit-user-filter/edit-user-filter.component';
import {EditUserComponent} from './edit-user-filter/edit-user/edit-user.component';

export const administrationRoutes: Routes = [
  {
    path: 'users/edit/:id',
    component: EditUserComponent,
  },
  {
    path: 'users/new',
    component: AddUserComponent,
  },
  {
    path: 'users/edit',
    component: EditUserFilterComponent,
  },
  {
    path: '',
    component: AdministrationComponent,
  },
];

export const routes = RouterModule.forChild(administrationRoutes);
