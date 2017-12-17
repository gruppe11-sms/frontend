import {Resolve} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class UserListResolver implements Resolve<User[]> {
  constructor(private userService: UserService) {

  }

  resolve(): Observable<User[]> {
    return this.userService.getUsers();
  }
}
