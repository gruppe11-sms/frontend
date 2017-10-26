import { TestBed, inject } from '@angular/core/testing';

import { AuditService } from './audit.service';
import {AuditModule} from "./audit.module";
import {HttpClientModule} from "@angular/common/http";
import {ServicesModule} from "../services/services.module";

describe('AuditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditService],
      imports: [AuditModule, HttpClientModule, ServicesModule]
    });
  });

  it('should be created', inject([AuditService], (service: AuditService) => {
    expect(service).toBeTruthy();
  }));
});
