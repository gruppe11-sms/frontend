import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TokenService} from './token.service';
import {UserService} from './user.service';
import {User} from '../models/user';

@Injectable()
export class MeService {
  constructor(private tokenService: TokenService, private userService: UserService) {
    this._me = this.tokenService
      .token
      .switchMap(() => userService.getMe())
      // Only do this emit once, all of them should share values, and have the same value
      .shareReplay();
  }

  private _me: Observable<User>;

  get me(): Observable<User> {
    return this._me;
  }
}
