import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  public name: string;
  public username: string;
  public password: string;

  public userCreationResponse: string;

  constructor(private userService: UserService) {
  }

  saveUser() {
    this.userService.createUser(new User(this.name, this.username, this.password))
      .subscribe(() => this.userCreationResponse = 'Succesfully saved user',
        (err) => {
          this.userCreationResponse = 'Failed to save user';
          console.error('Could not create user' + err);
        },
      );
  }
}
