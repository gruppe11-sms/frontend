import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {toHttpParams} from '../helpers';
import {Participant} from '../course/models/participant';

export interface IUsersNames {
  [id: number]: string;
}

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

  public saveUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`/api/users/${user.id}`, user);
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

  public getNames(userIds: number[]): Observable<IUsersNames> {
    const params = toHttpParams({userIds});

    return this.httpClient.get<IUsersNames>(`/api/users/names`, {params});
  }

  public getParticipantsWithNames(participants: Participant[]): Observable<Participant[]> {
    return this.getNames(participants.map(participant => participant.userId))
      .map(names => participants.map(participant => ({
        ...participant,
        name: names[participant.userId] || 'unnamed'
      })));
  }
}
