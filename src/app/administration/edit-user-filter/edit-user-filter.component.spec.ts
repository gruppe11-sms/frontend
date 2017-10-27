import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditUserFilterComponent} from './edit-user-filter.component';

describe('EditUserFilterComponent', () => {
  let component: EditUserFilterComponent;
  let fixture: ComponentFixture<EditUserFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserFilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
