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

@Component({
  selector: 'app-edit-user-filter',
  templateUrl: './edit-user-filter.component.html',
  styleUrls: ['./edit-user-filter.component.scss']
})
export class EditUserFilterComponent implements OnInit {

  public myControl = new FormControl();
  public users: User[] = [];
  filteredOptions: Observable<User[]>;
  public user: Observable<User>;

  roles: Observable<Role[]>;

  constructor(private userService: UserService,
              private roleService: RoleService) {
  }

  ngOnInit() {
    this.roles = this.roleService.getRoles();
    const users = this.userService.getUsers(); //.subscribe(users => this.users = users, error => console.log('Could not connect to role server'));

    this.filteredOptions = users.zip(
      this.myControl.valueChanges
        .startWith(null)
        .map(user => user && typeof user === 'object' ? user.name : user)
    )
      .map(([users, name]) => name ? this.filter(name) : users.slice());


    this.user = this.myControl.valueChanges.startWith(null);
  }

  filter(name: string): User[] {
    return this.users.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0)
  }

  displayFn(user: User): string {
    return user ? user.name + ' (' + user.username + ')' : user;
  }


}


