import {Component, OnInit} from '@angular/core';
import {Group} from '../../models/group';
import {Observable} from 'rxjs/Observable';
import {GroupService} from '../../services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {

  public groups: Observable<Group[]>;

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
    this.groups = this.groupService.getGroups();
  }

}
