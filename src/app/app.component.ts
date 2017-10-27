import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public authenticated: Observable<boolean>;

  constructor(private authService: AuthService) {

  }

  public ngOnInit(): void {
    this.authenticated = this.authService.authenticated;
  }

  public logout() {
    this.authService.logout();
  }
}
