import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
    const token = localStorage.getItem('token');
    if(token) {
      this._token.next(token);
    }
  }


  private _token = new BehaviorSubject<string>('');

  public get token(): Observable<string> {
    return this._token.asObservable();
  }

  public get authenticated(): Observable<boolean> {
    return this._token.map(token => !!token);
  }

  public get httpHeader(): Observable<HttpHeaders> {
    return this.token.map(token => {
      let headers = new HttpHeaders();
      headers = headers.append('authorization', token);
      return headers;
    });
  }

  public login(username: string, password: string): Observable<void> {
    return this.httpClient.post('/api/auth/login', {
      username, password,
    }, {observe: 'response', responseType: 'text'})
      .do(response => {
        console.log(response.headers);
        const token = response.headers.get('authorization') || '';
        this._token.next(token);
        console.log(token);

        if(token) {
          localStorage.setItem('token', token);
        }
      })
      .map(() => undefined);
  }

  public logout() {
    localStorage.removeItem('token');
  }

}
