import {Component, OnInit} from '@angular/core';
import {Group} from '../../models/group';
import {Observable} from 'rxjs/Observable';
import {GroupService} from '../../services/group.service';
import {MatSnackBar} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {animate, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition(':leave', [
        query(':leave', [
          style({opacity: 1, height: '*'}),
          animate('500ms', style({opacity: 0, height: 0})),
        ], {optional: true}),
      ]),
      transition(':enter', [
        query(':enter', [
          style({opacity: 0, height: 0}),
          animate('500ms', style({opacity: 1, height: '*'})),
        ], {optional: true}),
      ]),
    ]),
  ],
})
export class GroupListComponent implements OnInit {

  public groups: Observable<Group[]>;
  private trigger = new BehaviorSubject(1);

  constructor(private groupService: GroupService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.groups = this.trigger.switchMap(() => this.groupService.getGroups());
  }

  public remove(group: Group) {
    this.groupService.removeGroup(group)
      .subscribe(() => {
          this.snackBar.open('Successfully deleted group', '', {duration: 2000});
          this.trigger.next(Math.random());
        },
        (err) => {
          if (err.error && err.error.message) {
            this.snackBar.open('Failed to delete group: ' + err.error.message);
          } else {
            this.snackBar.open('Failed to delete group', '', {duration: 2000});
          }
          console.error('Could not delete group', err);
        });
  }

}
