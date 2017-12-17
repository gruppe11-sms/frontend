import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from './add_user/add-user.component';
import {AdministrationComponent} from './administration/administration.component';
import {EditUserFilterComponent} from './edit-user-filter/edit-user-filter.component';
import {EditUserComponent} from './edit-user-filter/edit-user/edit-user.component';
import {AddGroupComponent} from './add-group/add-group.component';
import {EditGroupComponent} from './edit-group/edit-group.component';
import {GroupListComponent} from './group-list/group-list.component';
import {GroupListResolver} from '../services/resolvers/group-list.resolver';
import {MeResolver} from '../services/resolvers/me.resolver';
import {UserListResolver} from '../services/resolvers/user-list.resolver';
import {UserResolver} from '../services/resolvers/user.resolver';
import {RoleListResolver} from '../services/resolvers/role-list.resolver';

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
    resolve: {
      user: UserResolver,
      roles: RoleListResolver,
      groups: GroupListResolver,
    },
  },
  {
    path: 'users',
    component: EditUserFilterComponent,
    data: {
      animation: 'userlist',
    },
    resolve: {
      users: UserListResolver,
    },
  },
  {
    path: '',
    component: AdministrationComponent,
    data: {
      animation: 'administration',
    },
    resolve: {
      me: MeResolver,
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
    resolve: {
      groups: GroupListResolver,
    },
  },
];

export const routes = RouterModule.forChild(administrationRoutes);
