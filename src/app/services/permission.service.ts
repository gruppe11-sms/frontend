import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {TokenService} from './token.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/distinctUntilChanged';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';

@Injectable()
export class PermissionService {
  private me: Observable<User>;

  constructor(private tokenService: TokenService, private userService: UserService) {
    this.me = this.tokenService
      .token
      .switchMap(() => userService.getMe())
      // Only do this emit once, all of them should share values, and have the same value
      .shareReplay();
  }

  public hasRoles(...roles: string[]): Observable<boolean> {
    return this.me
    // For each wanted role, check if the role exists
      .map(user => roles.map(roleName => user.roles.some(role => role.id === roleName)))
      // Is there any role that doesn't exists?
      .map(matches => matches.some(match => match === false))
      // And reverse it, because we want to know that all of them exists
      .map(hasRole => !hasRole);
  }
}
