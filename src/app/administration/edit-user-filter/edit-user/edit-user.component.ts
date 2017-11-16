import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import {User} from '../../../models/user';
import {Role} from '../../../models/role';
import {MatChipInputEvent, MatSnackBar} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';
import {Group} from '../../../models/group';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {RoleService} from '../../../services/role.service';
import {GroupService} from '../../../services/group.service';


const COMMA = 188;


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})

export class EditUserComponent implements OnInit {
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  public separatorKeysCodes = [ENTER, COMMA];
  @Input() public user: User;
  @Input() public roles: Role[];
  @Input() public groups: Group[];

  public constructor(private userService: UserService,
                     private route: ActivatedRoute,
                     private roleService: RoleService,
                     private groupService: GroupService,
                     private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(userId).subscribe(user => this.user = user);
    this.roleService.getRoles().subscribe(roles => this.roles = roles);
    this.groupService.getGroups().subscribe(groups => this.groups = groups);
  }

  addRole(event: MatChipInputEvent) {
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

  removeRole(role: Role) {
    const index = this.user.roles.indexOf(role);
    if (index >= 0) {
      this.user.roles.splice(index, 1);
    }
  }

  addGroup(event: MatChipInputEvent) {
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

  removeGroup(group: Group) {
    const index = this.user.groups.indexOf(group);
    if (index >= 0) {
      this.user.groups.splice(index, 1);
    }
  }

  saveUser() {
    this.userService.saveUser(this.user)
      .subscribe(() => this.snackBar.open('User updated successfully', 'Ok', {duration: 2000}),
        err => {
          this.snackBar.open('User not updated', 'Ok', {duration: 2000});
          console.error('Error updating user', err);
        });
  }
}
