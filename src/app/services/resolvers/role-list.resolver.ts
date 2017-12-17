import {Role} from '../../models/role';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RoleService} from '../services/role.service';

@Injectable()
export class RoleListResolver implements Resolve<Role[]> {


  constructor(private roleService: RoleService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Role[]> {
    return this.roleService.getRoles();
  }

}
