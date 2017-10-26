import {inject, TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {TokenService} from './token.service';
import {HttpClientModule} from "@angular/common/http";

describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, TokenService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
