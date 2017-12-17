import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../../services/services/group.service';
import {Observable} from 'rxjs/Observable';
import {Group} from '../../models/group';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../../models/user';
import {Role} from '../../models/role';
import {RoleService} from '../../services/services/role.service';
import {UserService} from '../../services/services/user.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss'],
})
export class EditGroupComponent implements OnInit {

  public titleControl = new FormControl('');
  public descriptionControl = new FormControl('');

  public group: BehaviorSubject<Group>;
  public members: BehaviorSubject<User[]>;
  public roles: BehaviorSubject<Role[]>;
  public groupsIn: BehaviorSubject<Group[]>;
  public inGroups: BehaviorSubject<Group[]>;
  public availableGroups: Observable<Group[]>;
  public availableUsers: Observable<User[]>;
  public availableRoles: Observable<Role[]>;

  private groupId: number;

  constructor(private route: ActivatedRoute,
              private groupService: GroupService,
              private roleService: RoleService,
              private userService: UserService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.group = this.route.params
      .map(params => params.id)
      .switchMap(id => this.groupService.getGroup(id))
      .behaviorSubject(new Group());

    this.group.subscribe(group => {
      this.titleControl.setValue(group.title);
      this.descriptionControl.setValue(group.description);
    });

    this.members = this.group.map(group => group.members).behaviorSubject([]);
    this.roles = this.group.map(group => group.roles).behaviorSubject([]);
    this.groupsIn = this.group.map(group => group.groupsIn).behaviorSubject([]);
    this.inGroups = this.group.map(group => group.inGroups).behaviorSubject([]);

    this.availableGroups = this.groupService.getGroups();
    this.availableRoles = this.roleService.getRoles();
    this.availableUsers = this.userService.getUsers();

    this.members.subscribe(members => console.log(members));
    this.roles.subscribe(members => console.log(members));
    this.groupsIn.subscribe(members => console.log(members));
    this.inGroups.subscribe(members => console.log(members));

  }

  public save() {
    const group: Group = {
      ...this.group.value,
      title: this.titleControl.value,
      description: this.descriptionControl.value,
      members: this.members.value,
      roles: this.roles.value,
      groupsIn: this.groupsIn.value,
      inGroups: this.inGroups.value,
    };

    this.groupService.updateGroup(group)
      .subscribe(() => this.snackBar.open('Successfully updated group', '', {duration: 2000}),
        (err) => {
          if (err.error && err.error.message) {
            this.snackBar.open('Failed to update group: ' + err.error.message);
          } else {
            this.snackBar.open('Failed to update group', '', {duration: 2000});
          }
          console.error('Could not update group', err);
        });
  }

  public formatTitle({title}: { title: string }): string {
    return title;
  }

  public formatName({name}: { name: string }): string {
    return name;
  }

}
