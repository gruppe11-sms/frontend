import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeUserdetailComponent} from './home-userdetail.component';

describe('HomeUserdetailComponent', () => {
  let component: HomeUserdetailComponent;
  let fixture: ComponentFixture<HomeUserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUserdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
