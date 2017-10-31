import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {JwtHelper} from "angular2-jwt";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

export interface ITokenUser {
  id: number,
  username: string
}

@Injectable()
export class TokenService {

  public token = new BehaviorSubject('');
  private user: Observable<ITokenUser>;

  public constructor(private jwt: JwtHelper) {
    this.loadExistingToken();
    this.token.subscribe(token => {
      if (token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token')
      }
    });

    this.user = this.token.filter(t => !!t)
      .map(token => {
        const subject = this.jwt.decodeToken(token.replace('Bearer ', '')).sub;
        return JSON.parse(subject);
      });
  }

  public getTokenUser(): Observable<ITokenUser> {
    return this.user;
  }

  private loadExistingToken() {
    const possibleToken = localStorage.getItem('token');
    if (possibleToken) {
      this.token.next(possibleToken);
    }
  }
}
