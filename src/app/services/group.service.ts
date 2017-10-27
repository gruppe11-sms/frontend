import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Group} from "../models/group";

@Injectable()
export class GroupService {
  public constructor(private httpClient: HttpClient) {

  }

  public getGroups(): Observable<Group[]> {
    return this.httpClient.get<Group[]>('/api/groups')
  }
}
