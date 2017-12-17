import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './services/services/auth.service';
import {PermissionService} from './services/services/permission.service';
import {AuditViewRole, GroupManagerRole, UserManagerRole} from './consts';
import {TokenService} from './services/services/token.service';
import {MatSnackBar} from '@angular/material';
import {MeService} from './services/services/me.service';
import {User} from './models/user';
import {animate, animateChild, query, style, transition, trigger} from '@angular/animations';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        query(':enter', [
          style({height: 0, opacity: 0, width: 0}),
        ], {optional: true}),
        query(':leave', [
          style({height: '*', width: '*'}),
          animate('200ms', style({opacity: 0})),
          animate('500ms ease-in-out', style({height: 0, width: 0})),
        ], {optional: true}),
        query(':enter', [
          animate('500ms ease-in-out', style({height: '*', width: '*'})),
          animate('200ms', style({opacity: 1})),
          animateChild(),
        ], {optional: true}),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {

  public authenticated: Observable<boolean>;
  public hasAuditViewRole: Observable<boolean>;
  public hasAnyAdministrationRole: Observable<boolean>;
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
    this.hasAuditViewRole = this.permissionService.hasAllRoles(AuditViewRole);
    this.hasAnyAdministrationRole = this.permissionService.hasAnyRole(UserManagerRole, GroupManagerRole);
  }

  public logout() {
    this.authService.logout();
  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || '';
  }
}
