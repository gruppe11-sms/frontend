import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditEntryFilterComponent } from './audit-entry-filter.component';
import {AuditModule} from "../../audit.module";
import {MatAutocompleteModule, MatInputModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('AuditEntryFilterComponent', () => {
  let component: AuditEntryFilterComponent;
  let fixture: ComponentFixture<AuditEntryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditEntryFilterComponent ],
      imports: [MatAutocompleteModule, FormsModule, MatInputModule, ReactiveFormsModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditEntryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
