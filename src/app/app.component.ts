import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './services/auth.service';
import {PermissionService} from './services/permission.service';
import {AuditViewRole, GroupManagerRole, UserManagerRole} from './consts';
import {TokenService} from './services/token.service';
import {MatSnackBar} from '@angular/material';
import {MeService} from './services/me.service';
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
          animate('200ms', style({opacity: 0})),
          style({height: '*', width: '*'}),
          animate('500ms', style({height: 0, width: 0})),
        ], {optional: true}),
        query(':enter', [
          animate('500ms', style({height: '*', width: '*'})),
          animate('500ms', style({opacity: 1})),
          animateChild(),
        ], {optional: true}),

        // animate('500ms', style({opacity: 0})),
        // animate('500ms', style({opacity: 1}))
      ]),
      // transition('* => *', [
      //   // query(':enter', [
      //   //   style({opacity: '0'}),
      //     // animate('500ms', style({height: '*'}))
      //   // ], {optional: true}),
      //   query(':self', [
      //     style({opacity: 0}),
      //     animate('250ms', style({height: 0, width: 0})),
      //     animate('250ms', style({height: '*', width: '*'})),
      //     animate('250ms', style({opacity: 1}))
      //     // style({opacity: 0}),
      //     // animate('500ms', style({opacity: 1}))
      //   ], {optional: true}),
      //   // query(':enter', [
      //   //   style({opacity: '0'}),
      //   //   animate('500ms', style({opacity: 1}))
      //   // ], {optional: true}),
      // ]),
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
    const animation = outlet.activatedRouteData['animation'] || '';
    console.log({animation});
    return animation;
  }
}
