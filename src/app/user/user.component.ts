import {Component, OnInit} from "@angular/core";
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import "rxjs/add/operator/mergeMap";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/filter";
import 'rxjs/add/observable/of';
import {TokenService} from "../services/token.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Observable<User>;

  constructor(private userService: UserService,
              private tokenService: TokenService) {
  }

  ngOnInit() {

  }
}
