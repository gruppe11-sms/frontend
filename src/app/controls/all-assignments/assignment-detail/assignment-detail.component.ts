import {Component, Input, OnInit} from '@angular/core';

import {MatSnackBar} from '@angular/material';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Assignment} from '../../../models/assignment';
import {AssignmentService} from '../../../services/services/assignment.service';


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {
  @Input()
  public assignment: Assignment;

  private loaded = false;

  public constructor(private assignmentService: AssignmentService,
                     private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  public uploadedAssignment(files: File[]) {
    const task = {
      file: files[files.length - 1],
      assignmentId: this.assignment.id,
    };

    this.assignmentService.uploadAssignment(task)
      .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            if (event.total) {
              // TODO Progressbar
            }
          } else if (event instanceof HttpResponse) {
            if (event.body) {
              // TODO something
            }
            this.snackBar.open('Assignment was uploaded', 'ok', {duration: 2000});
            this.reloadAssignment();
          }
        },
        err => {
          this.snackBar.open('Assignment was not uploaded', 'ok', {duration: 2000});
        });
  }

  public openedPanel() {
    if (!this.loaded) {
      this.loaded = !this.loaded;
      this.reloadAssignment();
    }
  }

  private reloadAssignment() {
    this.assignmentService.getOneAssignment(this.assignment.id).subscribe(assignment => this.assignment = assignment);
  }
}
