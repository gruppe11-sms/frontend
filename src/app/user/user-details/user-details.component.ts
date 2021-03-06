import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {MatDialog} from '@angular/material';
import {UserDetailChangePasswordComponent} from './user-detail-change-password/user-detail-change-password.component';
import {RoleService} from '../../services/services/role.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  public user: User;

  constructor(public dialog: MatDialog, private roleService: RoleService) {
  }

  ngOnInit() {
  }

  openPasswordDialog() {
    this.dialog.open(UserDetailChangePasswordComponent, {
      data: this.user
    });
  }

  public displayWith({title}: { title: string }) {
    return title;
  }
}
