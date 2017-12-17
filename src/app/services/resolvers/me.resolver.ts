import {User} from '../../models/user';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {MeService} from '../services/me.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MeResolver implements Resolve<User> {
  constructor(private meService: MeService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.meService.me.take(1);
  }

}
