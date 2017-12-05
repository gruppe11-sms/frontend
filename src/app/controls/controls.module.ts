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
import {TimeStampInputComponent} from './time-stamp-input/time-stamp-input.component';
import {FlexLayoutModule} from '@angular/flex-layout';

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
    FlexLayoutModule,
  ],
  declarations: [
    AssignmentDetailComponent,
    AllAssignmentsComponent,
    MultiEditComponent,
    TimeStampInputComponent,
  ],
  exports: [
    AssignmentDetailComponent,
    AllAssignmentsComponent,
    MultiEditComponent,
    TimeStampInputComponent
  ],
})
export class ControlsModule {

}
