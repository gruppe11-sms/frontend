import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {GroupService} from '../../services/group.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
})
export class AddGroupComponent implements OnInit {

  public titleControl = new FormControl('');
  public descriptionControl = new FormControl('');

  constructor(private groupService: GroupService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  public save() {
    this.groupService.createGroup(this.titleControl.value, this.descriptionControl.value)
      .subscribe(() => this.snackBar.open('Successfully created group', '', {duration: 2000}),
        (err) => {
          if (err.error && err.error.message) {
            this.snackBar.open('Failed to create group: ' + err.error.message);
          } else {
            this.snackBar.open('Failed to create group', '', {duration: 2000});
          }
          console.error('Could not create group', err);
        });
  }

}
