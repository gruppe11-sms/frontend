import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {MatSnackBar} from '@angular/material';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Assignment} from '../../../models/assignment';
import {AssignmentService, UploadTask} from '../../../services/services/assignment.service';


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {
  @Input()
  public assignment: Assignment;
  @Output()
  public handInAssignment = new EventEmitter<UploadTask>();

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
    this.handInAssignment.emit(task);

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
          }
        },
        err => {
          this.snackBar.open('Assignment was not uploaded', 'ok', {duration: 2000});
        });
  }

  public openedPanel() {
    if (!this.loaded) {
      this.loaded = !this.loaded;
      this.assignmentService.getOneAssignment(this.assignment.id).subscribe(assignment => this.assignment = assignment);
    }
  }
}

/*
this.assignmentService.uploadAssignment(task)
.subscribe(event => {this.snackBar.open('Assignment was uploaded', 'ok', {duration: 2000}),
err => {
this.snackBar.open('Assignment was no uploaded', 'ok', {duration: 2000});
console.error('Error uploading assignment', err);
}); */
