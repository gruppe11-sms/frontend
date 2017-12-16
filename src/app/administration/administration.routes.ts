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
    path: 'users/new',
    component: AddUserComponent,
    data: {
      animation: 'adduser',
    },
  },
  {
    path: 'users/:id',
    component: EditUserComponent,
    data: {
      animation: 'edituser',
    },
  },
  {
    path: 'users',
    component: EditUserFilterComponent,
    data: {
      animation: 'userlist',
    },
  },
  {
    path: '',
    component: AdministrationComponent,
    data: {
      animation: 'administration',
    },
  },
  {
    path: 'groups/new',
    component: AddGroupComponent,
    data: {
      animation: 'addgroup',
    },
  },
  {
    path: 'groups/:id/edit',
    component: EditGroupComponent,
    data: {
      animation: 'editgroup',
    },
  },
  {
    path: 'groups',
    component: GroupListComponent,
    data: {
      animation: 'grouplist',
    },
  },

];

export const routes = RouterModule.forChild(administrationRoutes);
