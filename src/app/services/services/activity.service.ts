import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Activity} from '../../models/activity';
import {CalenderExport} from '../../models/calenderExport';

@Injectable()
export class ActivityService {

  constructor(private httpClient: HttpClient) {
  }

  public getActivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>('/api/activities');
  }

  public createExport(): Observable<CalenderExport> {
    return this.httpClient.post<CalenderExport>(`/api/exports`, {});
  }

}
