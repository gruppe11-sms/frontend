import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {MatDialog, MatDialogRef} from "@angular/material";
import {UserDetailChangePasswordComponent} from "./user-detail-change-password/user-detail-change-password.component";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  public user: User;
  public newPassword: string;

  constructor(public dialog: MatDialog, private userService: UserService) {
  }

  ngOnInit() {
  }

  openPasswordDialog() {
    const dialog = this.dialog.open(UserDetailChangePasswordComponent, {
      width: '250px',
      data: this.newPassword
    });

    dialog.afterClosed().subscribe(result => {
      this.user.password = result;
      this.userService.saveUser(this.user);
    });

  }


}
