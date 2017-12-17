import {AuditEntry} from './AuditEntry';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuditService} from './audit.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuditResolve implements Resolve<AuditEntry[]> {


  constructor(private auditService: AuditService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AuditEntry[]> {

    const args = {
      userId: route.queryParams.userId || 0,
      action: route.queryParams.action || '',
    };

    return this.auditService.getEntries(args);
  }

}
