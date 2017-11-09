import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';

@Component({
  selector: 'app-edit-user-filter',
  templateUrl: './edit-user-filter.component.html',
  styleUrls: ['./edit-user-filter.component.scss'],
})
export class EditUserFilterComponent implements OnInit {

  public users: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}


