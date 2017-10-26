import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditComponent} from './audit/audit.component';
import {routes} from "./audit.routes";
import {MatExpansionModule, MatAutocompleteModule, MatInputModule, MatButtonModule,} from "@angular/material";
import {AuditService} from "./audit.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuditEntryDataComponent} from './audit/audit-entry-data/audit-entry-data.component';
import { AuditEntryFilterComponent } from './audit/audit-entry-filter/audit-entry-filter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    routes,
    MatExpansionModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    AuditService
  ],
  declarations: [
    AuditComponent,
    AuditEntryDataComponent,
    AuditEntryFilterComponent
  ]
})
export class AuditModule {
}