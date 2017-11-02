import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-detail-change-password',
  templateUrl: './user-detail-change-password.component.html',
  styleUrls: ['./user-detail-change-password.component.scss']
})
export class UserDetailChangePasswordComponent implements OnInit {

  public user: User;
  public notOldPassword: Observable<boolean>;

  constructor(public dialogRef: MatDialogRef<UserDetailChangePasswordComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.data;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  savePassword(oldPassword: string, newPassword: string) {
    this.userService.changePassword(oldPassword, newPassword).subscribe(() => this.dialogRef.close(),
      err => {
        this.notOldPassword.map(value => true);
        console.log('Wrong password', err);
      });

  }
}
