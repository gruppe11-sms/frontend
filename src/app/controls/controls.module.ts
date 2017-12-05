import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultiEditComponent} from './multi-edit/multi-edit.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AllAssignmentsComponent} from './all-assignments/all-assignments.component';
import {AssignmentDetailComponent} from './all-assignments/assignment-detail/assignment-detail.component';
import {ServicesModule} from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSnackBarModule,
    ServicesModule,
  ],
  declarations: [
    AssignmentDetailComponent,
    AllAssignmentsComponent,
    MultiEditComponent,
  ],
  exports: [
    AssignmentDetailComponent,
    AllAssignmentsComponent,
    MultiEditComponent,
  ],
})
export class ControlsModule {

}
