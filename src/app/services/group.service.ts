import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Group} from "../models/group";

@Injectable()
export class GroupService {
  constructor(private httpClient: HttpClient) {

  }

  getGroupsWhereUserIsIn(id: String): Observable<Group[]> {
    return this.httpClient.get<Group[]>('/groups/a/users/' + id)
  }
}
