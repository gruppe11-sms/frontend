import {Component, Input} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import {User} from '../../../models/user';
import {Role} from '../../../models/role';
import {MatChipInputEvent} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';
import {Group} from '../../../models/group';
import {UserService} from '../../../services/user.service';

const COMMA = 188;


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})

export class EditUserComponent {

  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  public separatorKeysCodes = [ENTER, COMMA];

  @Input() public user: User;
  @Input() public roles: Role[];
  @Input() public groups: Group[];

  public constructor(private userService: UserService) {
  }

  public addRole(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;


    if ((value || '').trim()) {
      const role = this.roles.find(r => r.title.toLowerCase() === value.toLowerCase());
      role ? this.user.roles.push(role) : console.log('Role not found');
    }
    if (input) {
      input.value = '';
    }
  }

  public removeRole(role: Role) {
    const index = this.user.roles.indexOf(role);
    if (index >= 0) {
      this.user.roles.splice(index, 1);
    }
  }

  public addGroup(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const group = this.groups.find(g => g.title.toLowerCase() === value.toLowerCase());
      group ? this.user.groups.push(group) : console.log('Group not found');
    }
    if (input) {
      input.value = '';
    }
  }

  public removeGroup(group: Group) {
    const index = this.user.groups.indexOf(group);
    if (index >= 0) {
      this.user.groups.splice(index, 1);
    }
  }

  public saveUser() {
    this.userService.saveUser(this.user)
      .subscribe(() => console.log('User saved'),
        err => console.error(`Error saving user`, err),
      );
  }
}
