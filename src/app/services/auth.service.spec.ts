import {inject, TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {TokenService} from './token.service';
import {HttpClientModule} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";

describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, TokenService, JwtHelper],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
