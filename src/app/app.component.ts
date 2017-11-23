import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './services/auth.service';
import {PermissionService} from './services/permission.service';
import {AuditViewRole} from './consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public authenticated: Observable<boolean>;
  public hasAuditViewRole: Observable<boolean>;

  constructor(private authService: AuthService, private permissionService: PermissionService) {

  }

  public ngOnInit(): void {
    this.authenticated = this.authService.authenticated;
    this.hasAuditViewRole = this.permissionService.hasRoles(AuditViewRole);
  }

  public logout() {
    this.authService.logout();
  }
}
