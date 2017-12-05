import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './services/auth.service';
import {PermissionService} from './services/permission.service';
import {AuditViewRole} from './consts';
import {TokenService} from './services/token.service';
import {MatSnackBar} from '@angular/material';
import {MeService} from './services/me.service';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public authenticated: Observable<boolean>;
  public hasAuditViewRole: Observable<boolean>;
  public me: Observable<User>;

  constructor(private authService: AuthService,
              private permissionService: PermissionService,
              private tokenService: TokenService,
              private snackBar: MatSnackBar,
              private meService: MeService) {

    this.tokenService.user.subscribe(undefined, (err: Error) => {
      this.authService.logout();
      this.snackBar.open(err.message, undefined, {duration: 10 * 1000});
    });

    this.me = this.meService.me;
  }

  public ngOnInit(): void {
    this.authenticated = this.authService.authenticated;
    this.hasAuditViewRole = this.permissionService.hasRoles(AuditViewRole);
  }

  public logout() {
    this.authService.logout();
  }
}
