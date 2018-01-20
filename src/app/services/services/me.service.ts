import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TokenService} from './token.service';
import {UserService} from './user.service';
import {User} from '../../models/user';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/share';
import '../../operators/sharedNewest';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MeService {
  public readonly me: Observable<User>;

  constructor(private tokenService: TokenService, private userService: UserService) {
    this.me = this.tokenService
      .token
      .sharedNewest(token => {
        if (token) {
          return userService.getMe();
        } else {
          return of(new User());
        }
      });
  }
}
