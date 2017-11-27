import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultiEditComponent} from './multi-edit/multi-edit.component';
import {MatAutocompleteModule, MatButtonModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
  ],
  declarations: [
    MultiEditComponent,
  ],
  exports: [
    MultiEditComponent,
  ],
})
export class ControlsModule {

}
