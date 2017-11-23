import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import {User} from '../../../models/user';
import {Role} from '../../../models/role';
import {MatSnackBar} from '@angular/material';
import {Group} from '../../../models/group';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/combineLatest';
import '../../../operators/behaviorSubject';
import {RoleService} from '../../../services/role.service';
import {GroupService} from '../../../services/group.service';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/share';

interface ID {
  id: any;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public user: Observable<User>;
  public roles: BehaviorSubject<Role[]>;
  public groups: BehaviorSubject<Group[]>;
  public possibleRoles: Observable<Role[]>;
  public possibleGroups: Observable<Group[]>;
  public userid: string;
  public username: string;

  public constructor(private userService: UserService,
                     private route: ActivatedRoute,
                     private roleService: RoleService,
                     private groupService: GroupService,
                     private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUser(userId).share();
    this.groups = this.user.map(user => user.groups).behaviorSubject([]);
    this.roles = this.user.map(user => user.roles).behaviorSubject([]);
    this.possibleRoles = this.removeExisting(this.roleService.getRoles(), this.roles);
    this.possibleGroups = this.removeExisting(this.groupService.getGroups(), this.groups);

    this.user.subscribe(user => {
      this.userid = user.username;
      this.username = user.name;
    });

  }

  public addRole(role: Role) {
    let roles = this.roles.value;
    roles = [...roles, role];
    this.roles.next(roles);
  }

  public removeRole(role: Role) {
    let roles = this.roles.value;
    roles = roles.filter(existingRole => existingRole.id !== role.id);
    this.roles.next(roles);

  }

  public addGroups(group: Group) {
    let groups = this.groups.value;
    groups = [...groups, group];
    this.groups.next(groups);
  }

  public removeGroup(group: Group) {
    let groups = this.groups.value;
    groups = groups.filter(existingGroup => existingGroup.id !== group.id);
    this.groups.next(groups);
  }

  public formatRole(role: Role): string {
    return role ? role.title : '';
  }

  public formatGroup(group: Group): string {
    return group ? group.title : '';
  }

  public saveUser() {
    this.user.take(1)
      .switchMap(existingUser => {
        const user = {
          ...existingUser,
          roles: this.roles.value,
          groups: this.groups.value,
          name: this.username,
          username: this.userid,
        };

        return this.userService.saveUser(user);
      })
      .subscribe(() => this.snackBar.open('User updated successfully', 'Ok', {duration: 2000}),
        err => {
          this.snackBar.open('User not updated', 'Ok', {duration: 2000});
          console.error('Error updating user', err);
        });
  }

  private removeExisting<T extends ID>(possibleObs: Observable<T[]>, currentObs: Observable<T[]>): Observable<T[]> {
    return possibleObs
      .combineLatest(currentObs
        .map(currents => currents
          .map(current => current.id)))
      .map(([possibles, currentIds]) => {
        return possibles.filter(possible => !currentIds.includes(possible.id));
      });

  }
}
