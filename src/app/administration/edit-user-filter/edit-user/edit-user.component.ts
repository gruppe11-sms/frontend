import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/zip';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Group} from '../../../models/group';
import {Role} from '../../../models/role';
import {User} from '../../../models/user';
import '../../../operators/behaviorSubject';
import {GroupService} from '../../../services/group.service';
import {RoleService} from '../../../services/role.service';
import {UserService} from '../../../services/user.service';

interface ID {
  id: any;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public user: BehaviorSubject<User>;
  public roles: BehaviorSubject<Role[]>;
  public groups: BehaviorSubject<Group[]>;
  public possibleRoles: Observable<Role[]>;
  public possibleGroups: Observable<Group[]>;
  public username: string;
  public name: string;

  public constructor(private userService: UserService,
                     private route: ActivatedRoute,
                     private roleService: RoleService,
                     private groupService: GroupService,
                     private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.user = this.route.params
      .map(params => params['id'])
      .switchMap(userId => this.userService.getUser(userId))
      .behaviorSubject(new User());
    this.groups = this.user.map(user => user.groups).behaviorSubject([]);
    this.roles = this.user.map(user => user.roles).behaviorSubject([]);
    this.possibleRoles = this.roleService.getRoles();
    this.possibleGroups = this.groupService.getGroups();

    this.user.subscribe(user => {
      this.username = user.username;
      this.name = user.name;
    });

  }

  public displayWith({title}: { title: string }) {
    return title;
  }

  public saveUser() {
    const existingUser = this.user.value;

    const user = {
      ...existingUser,
      roles: this.roles.value,
      groups: this.groups.value,
      name: this.name,
      username: this.username,
    };

    this.userService.saveUser(user)
      .subscribe(() => this.snackBar.open('User updated successfully', 'Ok', {duration: 2000}),
        err => {
          this.snackBar.open('User not updated', 'Ok', {duration: 2000});
          console.error('Error updating user', err);
        });
  }
}
