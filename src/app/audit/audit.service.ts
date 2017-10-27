import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs/Observable";
import {AuditEntry} from "./AuditEntry";
import "rxjs/add/observable/of";
import {Filters} from "./Filters";
import {toHttpParams} from "../helpers/index";

@Injectable()
export class AuditService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  public getEntries(args = {userId: 0, action: ""}): Observable<AuditEntry[]> {
    return this.authService.httpHeader
      .switchMap(headers => {
        let params = toHttpParams(args);

        return this.httpClient.get<AuditEntry[]>(`/api/auditentry`, {headers, params});
      })
      .map(entries => entries
        .map(this.convert)
      )
  }

  public getFilters(): Observable<Filters> {
    return this.authService.httpHeader
      .switchMap(headers => this.httpClient.get<Filters>("/api/auditentry/filters", {headers}));
  }

  private convert(entry: AuditEntry): AuditEntry {
    console.log(entry.data);
    try {
      entry.data = JSON.parse(entry.data);
      if(typeof entry.data === 'number') {
        entry.data = String(entry.data);
      }
      if(typeof entry.data === 'boolean') {
        entry.data = String(entry.data);
      }
    }
    catch (e) {
      entry.data = {
        data: entry.data
      }
    }
    return entry;
  }
}
