import {Component, OnInit} from "@angular/core";
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {GroupService} from "../services/group.service";
import {Group} from "../models/group";
import "rxjs/add/operator/mergeMap";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Observable<User>;
  groups: Observable<Group[]>;

  constructor(private userService: UserService,
              private groupService: GroupService) {

  }

  ngOnInit(): void {
    this.user = this.userService.getUser(1);
    //this.groups = this.user
      //.switchMap(user => this.groupService.getGroupsWhereUserIsIn(user.id));
  }

  getGroups() {
  }

  changePassword() {
    console.log("Password Changed");
  }

}
