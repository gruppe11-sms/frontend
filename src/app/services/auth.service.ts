import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

export const API_URL: string = "http://localhost:8462";

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }


  private _token = new BehaviorSubject<string>('');

  public get token(): Observable<string> {
    return this._token.asObservable();
  }

  public get authenticated(): Observable<boolean> {
    return this._token.map(token => !!token);
  }

  public login(username: string, password: string): Observable<void> {
    return this.httpClient.post(API_URL + '/api/auth/login', {
      username, password,
    }, {observe: 'response'})
      .do(response => {
        const token = response.headers.get('authorization') || '';
        this._token.next(token);
      })
      .map(() => undefined);
  }

}
