import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../services/services/auth.service';
import {Observable} from 'rxjs/Observable';
import {AuditEntry} from './AuditEntry';
import 'rxjs/add/observable/of';
import {Filters} from './Filters';
import {toHttpParams} from '../helpers/index';

@Injectable()
export class AuditService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  public getEntries(args = {userId: 0, action: ''}): Observable<AuditEntry[]> {
    const params = toHttpParams(args);

    return this.httpClient.get<AuditEntry[]>(`/api/auditentry`, {params})
      .map(entries => entries
        .map(this.convert)
      );
  }

  public getFilters(): Observable<Filters> {
    return this.httpClient.get<Filters>('/api/auditentry/filters');
  }

  private convert(entry: AuditEntry): AuditEntry {
    try {
      entry.data = JSON.parse(entry.data);
      if (typeof entry.data === 'number') {
        entry.data = String(entry.data);
      }
      if (typeof entry.data === 'boolean') {
        entry.data = String(entry.data);
      }
    } catch (e) {
      entry.data = {
        data: entry.data
      };
    }
    return entry;
  }
}
