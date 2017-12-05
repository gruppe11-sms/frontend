import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/repeat';

export interface ITokenUser {
  id: number;
  username: string;
}

@Injectable()
export class TokenService {
  public constructor(private jwt: JwtHelper) {
    this.loadExistingToken();
    this.token.subscribe(token => {
      if (token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }
    });

    this._user = this.token.filter(t => !!t)
      .map(token => {
        const decodedToken = this.jwt.decodeToken(token.replace('Bearer ', ''));

        if (this.jwt.isTokenExpired(token)) {
          console.log('Login token has expired. Logging out.');
          throw new Error('Login has expired. Please login again.');
        }

        const subject = decodedToken.sub;
        return JSON.parse(subject);
      });
  }

  public token = new BehaviorSubject('');

  private _user: Observable<ITokenUser>;

  get user(): Observable<ITokenUser> {
    return this._user;
  }

  public getTokenUser(): Observable<ITokenUser> {
    return this._user;
  }

  private loadExistingToken() {
    const possibleToken = localStorage.getItem('token');
    if (possibleToken) {
      this.token.next(possibleToken);
    }
  }
}
