import {Component, OnInit} from "@angular/core";
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {GroupService} from "../services/group.service";
import {Group} from "../models/group";
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  groups: Group[];

  constructor(private userService: UserService,
              private groupService: GroupService) {

  }

  ngOnInit(): void {
    this.userService.getUser('eddc8641-229c-4153-96cf-e2ea87e040f2').subscribe(user => this.user = user);

  }

  getGroups() {
    this.groupService.getGroupsWhereUserIsIn(this.user.id).subscribe(groups => this.groups = groups)
  }

  changePassword() {
    console.log("Password Changed");
  }

}
