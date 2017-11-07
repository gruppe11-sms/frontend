import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseDetailFormsComponent} from './course-detail-forms.component';

describe('CourseDetailFormsComponent', () => {
  let component: CourseDetailFormsComponent;
  let fixture: ComponentFixture<CourseDetailFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
