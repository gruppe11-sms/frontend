import {Component, OnInit} from '@angular/core';
import {PermissionService} from '../../services/permission.service';
import {Observable} from 'rxjs/Observable';
import {GroupManagerRole, UserManagerRole} from '../../consts';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  public isUserManager: Observable<boolean>;
  public isGroupManager: Observable<boolean>;

  constructor(private permissionService: PermissionService) {
  }

  ngOnInit() {
    this.isUserManager = this.permissionService.hasAllRoles(UserManagerRole);
    this.isGroupManager = this.permissionService.hasAllRoles(GroupManagerRole);
  }

}
