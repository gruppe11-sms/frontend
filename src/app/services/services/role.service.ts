import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Role} from '../../models/role';

@Injectable()
export class RoleService {
  public constructor(private httpClient: HttpClient) {
  }

  public getRoles(): Observable<Role[]> {
    return this.httpClient.get('/api/roles');
  }
}
