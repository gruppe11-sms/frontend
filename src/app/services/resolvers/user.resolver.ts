import {User} from '../../models/user';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params.id);
  }
}
