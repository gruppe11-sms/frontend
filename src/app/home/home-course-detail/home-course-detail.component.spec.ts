import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeCourseDetailComponent} from './home-course-detail.component';

describe('HomeCourseDetailComponent', () => {
  let component: HomeCourseDetailComponent;
  let fixture: ComponentFixture<HomeCourseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCourseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
