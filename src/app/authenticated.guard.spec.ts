import {inject, TestBed} from '@angular/core/testing';

import {AuthenticatedGuard} from './authenticated.guard';

describe('AuthenticatedGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedGuard],
    });
  });

  it('should ...', inject([AuthenticatedGuard], (guard: AuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});