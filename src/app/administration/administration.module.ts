import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditUserComponent} from "./edit-user/edit-user.component";
import {AddUserComponent} from "./add_user/add-user.component";
import {routes} from "./administration.routes";
import {AdministrationComponent} from './administration/administration.component';
import {MatAutocompleteModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditUserFilterComponent } from './edit-user-filter/edit-user-filter.component';

@NgModule({
  imports: [
    CommonModule,
    routes,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: [
    AddUserComponent,
    EditUserComponent,
    AdministrationComponent,
    EditUserFilterComponent
  ]
})
export class AdministrationModule {
}
