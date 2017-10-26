import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import "rxjs/add/operator/switchMap";

@Injectable()
export class UserService implements OnInit {
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    console.log(this.getUsers());
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get(`/api/users/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users/');
  }


}
