import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './services/auth.service';
import {PermissionService} from './services/permission.service';
import {AuditViewRole} from './consts';
import {TokenService} from './services/token.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public authenticated: Observable<boolean>;
  public hasAuditViewRole: Observable<boolean>;

  constructor(private authService: AuthService,
              private permissionService: PermissionService,
              private tokenService: TokenService,
              private snackBar: MatSnackBar) {
    this.tokenService.user.subscribe(undefined, (err: Error) => {
      this.authService.logout();
      this.snackBar.open(err.message, undefined, {duration: 10 * 1000});
    });
  }

  public ngOnInit(): void {
    this.authenticated = this.authService.authenticated;
    this.hasAuditViewRole = this.permissionService.hasRoles(AuditViewRole);
  }

  public logout() {
    this.authService.logout();
  }
}
