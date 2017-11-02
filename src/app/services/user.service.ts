import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

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

  public saveUser(user: User) {
    return this.httpClient.put('/api/users', user, {responseType: 'text'});
  }

  public getMe(): Observable<User> {
    return this.httpClient.get<User>('/api/users/me');
  }

  public changePassword(oldPassword: string, newPassword: string): Observable<string> {
    return this.httpClient.post('/api/users/changepassword', {oldPassword, newPassword}, {responseType: 'text'});
  }
}
