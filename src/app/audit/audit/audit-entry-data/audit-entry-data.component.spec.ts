import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditEntryDataComponent } from './audit-entry-data.component';

describe('AuditEntryDataComponent', () => {
  let component: AuditEntryDataComponent;
  let fixture: ComponentFixture<AuditEntryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditEntryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditEntryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
