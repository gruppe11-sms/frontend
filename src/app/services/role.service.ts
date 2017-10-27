import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Role} from "../models/role";

@Injectable()
export class RoleService {

  constructor(private httpCLient: HttpClient) {

  }

  getRoles() : Observable<Role[]> {
    return this.httpCLient.get('/api/roles')
  }

}
