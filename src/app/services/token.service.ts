import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class TokenService {

  public token = new BehaviorSubject('');

  constructor() {
    this.token.subscribe(token => {
      if(token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token')
      }
    });

    this.loadExistingToken();
  }

  private loadExistingToken() {
    const possibleToken = localStorage.getItem('token');
    if(possibleToken) {
      this.token.next(possibleToken);
    }
  }

}
