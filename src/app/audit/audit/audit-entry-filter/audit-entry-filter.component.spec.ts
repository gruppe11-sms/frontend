import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditEntryFilterComponent } from './audit-entry-filter.component';

describe('AuditEntryFilterComponent', () => {
  let component: AuditEntryFilterComponent;
  let fixture: ComponentFixture<AuditEntryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditEntryFilterComponent ]
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
