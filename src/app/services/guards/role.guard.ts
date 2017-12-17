import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {PermissionService} from '../services/permission.service';

@Injectable()
export class RoleGuard implements CanActivate {


  constructor(private permissionService: PermissionService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const expectedRoles = next.data['roles'] as string[];

    return this.permissionService.hasAllRoles(...expectedRoles);

  }
}
