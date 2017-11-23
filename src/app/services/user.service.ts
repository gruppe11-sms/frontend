import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import {toHttpParams} from '../helpers/index';

@Injectable()
export class UserService {

  public constructor(private httpClient: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users/');
  }

  public createUser(user: User) {
    return this.httpClient.post('/api/users', user);
  }

  public saveUser(user: User): Observable<void> {
    return this.updateUser(user)
      .zip(this.updateGroups(user))
      .zip(this.updateRoles(user))
      .map(() => undefined);
  }

  public getMe(): Observable<User> {
    return this.httpClient.get<User>('/api/users/me');
  }

  public changePassword(oldPassword: string, newPassword: string): Observable<string> {
    return this.httpClient.post('/api/users/changepassword', {oldPassword, newPassword}, {responseType: 'text'});
  }

  public getUser(userId: number): Observable<User> {
    return this.httpClient.get(`/api/users/${userId}`);
  }

  private updateUser(user: User) {
    return this.httpClient.put('/api/users', {
      id: user.id,
      username: user.username,
      password: user.password,
      name: user.name,
    }, {responseType: 'text'});
  }

  private updateGroups(user: User) {
    const groupIds = user.groups.map(group => group.id).join(',');
    const groupParams = toHttpParams({groups: groupIds});
    return this.httpClient.put(`/api/users/${user.id}/groups`, {}, {params: groupParams, responseType: 'text'});
  }

  private updateRoles(user: User) {
    const roleIds = user.roles.map(role => role.key).join(',');
    const roleParams = toHttpParams({roles: roleIds});
    return this.httpClient.put(`/api/users/${user.id}/roles`, {}, {params: roleParams, responseType: 'text'});
  }
}
