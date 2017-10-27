import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import "rxjs/add/operator/startWith";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import {Role} from "../../models/role";
import {RoleService} from "../../services/role.service";
import {Group} from "../../models/group";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-edit-user-filter',
  templateUrl: './edit-user-filter.component.html',
  styleUrls: ['./edit-user-filter.component.scss']
})
export class EditUserFilterComponent implements OnInit {

  public myControl = new FormControl();
  public users: User[] = [];
  public filteredOptions: Observable<User[]>;
  public user: Observable<User>;

  public roles: Observable<Role[]>;
  public groups: Observable<Group[]>;

  constructor(private userService: UserService,
              private roleService: RoleService,
              private groupService: GroupService) {
  }

  ngOnInit() {
    this.roles = this.roleService.getRoles();
    this.groups = this.groupService.getGroups();
    const users = this.userService.getUsers(); //.subscribe(users => this.users = users, error => console.log('Could not connect to role server'));

    this.filteredOptions = users.zip(
      this.myControl.valueChanges
        .startWith(null)
        .map(user => user && typeof user === 'object' ? user.name : user)
    ).map(([users, name]) => name ? this.filter(name) : users.slice());

    this.user = this.myControl.valueChanges.startWith(null);
  }

  public filter(name: string): User[] {
    return this.users.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0)
  }

  public displayFn(user: User): string {
    return user ? user.name : user;
  }

}


