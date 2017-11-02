import {inject, TestBed} from '@angular/core/testing';

import {TokenService} from './token.service';
import {JwtHelper} from 'angular2-jwt';

describe('TokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService, JwtHelper]
    });
  });

  it('should be created', inject([TokenService], (service: TokenService) => {
    expect(service).toBeTruthy();
  }));
});
