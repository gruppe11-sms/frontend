import {Component, Input} from "@angular/core";
import "rxjs/add/operator/startWith";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import {User} from "../../../models/user";
import {Role} from "../../../models/role";
import {MatChipInputEvent} from "@angular/material";
import {ENTER} from '@angular/cdk/keycodes';
import {Group} from "../../../models/group";
import {UserService} from "../../../services/user.service";

const COMMA = 188;


@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent {

  public visible: boolean = true;
  public selectable: boolean = true;
  public removable: boolean = true;
  public addOnBlur: boolean = true;
  public separatorKeysCodes = [ENTER, COMMA];

  @Input() public user: User;
  @Input() public roles: Role[];
  @Input() public groups: Group[];

  public constructor(private userService: UserService) {
  }

  public addRole(event: MatChipInputEvent) {
    let input = event.input;
    let value = event.value;

    if ((value || '').trim()) {
      let role = this.roles.find(role => role.title.toLowerCase() === value.toLowerCase());
      role ? this.user.roles.push(role) : console.log("Role not found");
    }

    if (input) {
      input.value = ''
    }
  }

 public removeRole(role: Role) {
    let index = this.user.roles.indexOf(role);
    if (index >= 0) {
      this.user.roles.splice(index, 1);
    }
  }

  public addGroup(event: MatChipInputEvent) {
    let input = event.input;
    let value = event.value;

    if ((value || '').trim()) {
      let group = this.groups.find(group => group.title.toLowerCase() === value.toLowerCase());
      if (group) {
        this.user.groups.push(group);
      } else {
        console.log("Group not found");
      }
    }

    if (input) {
      input.value = ''
    }
  }

  public removeGroup(group: Group) {
    let index = this.user.groups.indexOf(group);
    if (index >= 0) {
      this.user.groups.splice(index, 1);
    }
  }

  public saveUser() {
    this.userService.saveUser(this.user)
      .subscribe(() => console.log("User saved"),
        err => console.error(`Error saving user`, err)
      )
  }
}

