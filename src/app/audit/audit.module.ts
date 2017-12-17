import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditComponent} from './audit/audit.component';
import {routes} from './audit.routes';
import {MatAutocompleteModule, MatButtonModule, MatExpansionModule, MatInputModule, MatPaginatorModule,} from '@angular/material';
import {AuditService} from './audit.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuditEntryDataComponent} from './audit/audit-entry-data/audit-entry-data.component';
import {AuditEntryFilterComponent} from './audit/audit-entry-filter/audit-entry-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuditResolve} from './audit.resolver';
import {AuditFilterResolver} from './audit-filter.resolver';


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
    MatButtonModule,
    MatPaginatorModule,
  ],
  providers: [
    AuditService,
    AuditResolve,
    AuditFilterResolver,
  ],
  declarations: [
    AuditComponent,
    AuditEntryDataComponent,
    AuditEntryFilterComponent,
  ],
})
export class AuditModule {
}
