import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Group} from '../models/group';

@Injectable()
export class GroupService {
  public constructor(private httpClient: HttpClient) {

  }

  public getGroups(): Observable<Group[]> {
    return this.httpClient.get<Group[]>('/api/groups');
  }

  public createGroup(title: string, description: string): Observable<Group> {
    return this.httpClient.post<Group>('api/groups', {title, description});

  }

  public updateGroup(group: Group): Observable<Group> {
    return this.httpClient.put<Group>(`api/groups/${group.id}`, group);
  }

  public getGroup(id: number): Observable<Group> {
    return this.httpClient.get<Group>(`api/groups/${id}`);
  }

  public removeGroup(group: Group): Observable<string> {
    return this.httpClient.delete(`api/groups/${group.id}`, {responseType: 'text'});

  }
}
