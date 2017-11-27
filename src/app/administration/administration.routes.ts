import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from './add_user/add-user.component';
import {AdministrationComponent} from './administration/administration.component';
import {EditUserFilterComponent} from './edit-user-filter/edit-user-filter.component';
import {EditUserComponent} from './edit-user-filter/edit-user/edit-user.component';
import {AddGroupComponent} from './add-group/add-group.component';
import {EditGroupComponent} from './edit-group/edit-group.component';
import {GroupListComponent} from './group-list/group-list.component';

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
  {
    path: 'groups/new',
    component: AddGroupComponent,
  },
  {
    path: 'groups/:id/edit',
    component: EditGroupComponent,
  },
  {
    path: 'groups',
    component: GroupListComponent,
  },

];

export const routes = RouterModule.forChild(administrationRoutes);
