import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/take";
import {TokenService} from "./token.service";

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  public get authenticated(): Observable<boolean> {
    return this.tokenService.token.map(token => !!token);
  }

  public login(username: string, password: string): Observable<void> {
    return this.httpClient.post('/api/auth/login', {
      username, password,
    }, {observe: 'response', responseType: 'text'})
      .do(response => {
        const token = response.headers.get('authorization') || '';
        this.tokenService.token.next(token);
      })
      .map(() => undefined);
  }

  public logout() {
    this.tokenService.token.next('');
  }
}
