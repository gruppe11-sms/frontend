import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Group} from '../../models/group';
import {Observable} from 'rxjs/Observable';
import {GroupService} from '../services/group.service';
import {Injectable} from '@angular/core';

@Injectable()
export class GroupListResolver implements Resolve<Group[]> {

  constructor(private groupService: GroupService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Group[]> {
    return this.groupService.getGroups();
  }

}
