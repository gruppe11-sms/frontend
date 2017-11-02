import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailChangePasswordComponent } from './user-detail-change-password.component';

describe('UserDetailChangePasswordComponent', () => {
  let component: UserDetailChangePasswordComponent;
  let fixture: ComponentFixture<UserDetailChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
