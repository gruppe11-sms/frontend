import {Filters} from './Filters';
import {Resolve} from '@angular/router';
import {AuditService} from './audit.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class AuditFilterResolver implements Resolve<Filters> {
  constructor(private auditService: AuditService) {

  }

  resolve(): Observable<Filters> {
    return this.auditService.getFilters();
  }
}
