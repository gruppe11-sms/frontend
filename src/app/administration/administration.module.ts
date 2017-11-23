import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditUserComponent} from './edit-user-filter/edit-user/edit-user.component';
import {AddUserComponent} from './add_user/add-user.component';
import {routes} from './administration.routes';
import {AdministrationComponent} from './administration/administration.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditUserFilterComponent} from './edit-user-filter/edit-user-filter.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ControlsModule} from '../controls/controls.module';
import {AddGroupComponent} from './add-group/add-group.component';
import {EditGroupComponent} from './edit-group/edit-group.component';
import {EditModelListComponent} from './edit-model-list/edit-model-list.component';
import {GroupListComponent} from './group-list/group-list.component';

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
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    ControlsModule,
  ],
  declarations: [
    AddUserComponent,
    EditUserComponent,
    AdministrationComponent,
    EditUserFilterComponent,
    AddGroupComponent,
    EditGroupComponent,
    EditModelListComponent,
    GroupListComponent,
  ],
})
export class AdministrationModule {
}
