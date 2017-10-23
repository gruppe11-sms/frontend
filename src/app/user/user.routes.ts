import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user.component";

export const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
];

export const routes = RouterModule.forChild(userRoutes);
