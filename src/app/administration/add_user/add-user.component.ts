import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {MatSnackBar} from '@angular/material';

@Component({
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {

  public name: string;
  public username: string;
  public password: string;

  constructor(private userService: UserService, private snackbar: MatSnackBar) {
  }

  saveUser() {
    this.userService.createUser(new User(this.name, this.username, this.password))
      .subscribe(() => this.snackbar.open('Successfully created user', '', {duration: 2000}),
        (err) => {
          if (err.error && err.error.message) {
            this.snackbar.open('Failed to create user: ' + err.error.message);
          } else {
            this.snackbar.open('Failed to create user', '', {duration: 2000});
          }
          console.error('Could not create user', err);
        },
      );
  }
}
