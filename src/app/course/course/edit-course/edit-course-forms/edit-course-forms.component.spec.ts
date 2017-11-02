import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditCourseFormsComponent} from './edit-course-forms.component';

describe('EditCourseFormsComponent', () => {
  let component: EditCourseFormsComponent;
  let fixture: ComponentFixture<EditCourseFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourseFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
