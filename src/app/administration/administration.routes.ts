import {RouterModule, Routes} from "@angular/router";
import {AddUserComponent} from "./add_user/add-user.component";
import {AdministrationComponent} from "./administration/administration.component";
import {EditUserFilterComponent} from "./edit-user-filter/edit-user-filter.component";

export const administrationRoutes: Routes = [
  {
    path: '',
    component: AdministrationComponent
  },
  {
    path: 'users/new',
    component: AddUserComponent
  },
  {
    path: 'users/edit',
    component: EditUserFilterComponent
  },
];

export const routes = RouterModule.forChild(administrationRoutes);
