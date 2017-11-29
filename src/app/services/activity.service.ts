import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ActivityService {

  constructor(private httpClient: HttpClient) {

  }

  public getActivities() {
    return this.httpClient.get('/api/activities');
  }
}
