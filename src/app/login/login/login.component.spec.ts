import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material";
import {ServicesModule} from "../../services/services.module";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [FormsModule, MatInputModule, ServicesModule, RouterTestingModule, NoopAnimationsModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
