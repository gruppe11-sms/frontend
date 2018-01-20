import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import {Observable} from 'rxjs/Observable';
import {MeService} from './me.service';

@Injectable()
export class PermissionService {

  constructor(private meService: MeService) {
  }

  public hasAllRoles(...roles: string[]): Observable<boolean> {
    return this.meService.me
    // For each wanted role, check if the role exists
      .map(user => roles.map(roleName => user.roles.some(role => role.id === roleName)))
      // Is there any role that doesn't exists?
      .map(matches => matches.some(match => match === false))
      // And reverse it, because we want to know that all of them exists
      .map(hasRole => !hasRole);
  }

  public hasAnyRole(...roles: string[]): Observable<boolean> {
    return this.meService.me
      .map(user => roles.some(roleName => user.roles.some(role => role.id === roleName)));
  }
}
