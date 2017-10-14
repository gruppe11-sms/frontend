import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  public login() {
    this.authService.login(this.username, this.password)
      .subscribe(() => {
          this.router.navigate(['']);
        },
        (err) => {
          console.error(err);
        });
  }

}
