import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {ServicesModule} from '../services/services.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ControlsModule} from '../controls/controls.module';
import {RouterTestingModule} from '@angular/router/testing';

/**
 * This module is used purely for testing, and imports everything, to make
 * it easier to write tests for components
 */
@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsModule,
    RouterTestingModule,
    MatAutocompleteModule,
  ],
  exports: [
    CommonModule,
    NoopAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsModule,
    RouterTestingModule,
    MatAutocompleteModule,
  ],
  declarations: [],
})
export class TestsModule {
}
