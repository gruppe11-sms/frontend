import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {AssignmentService, UploadTask} from '../../../assignment.service';
import {MatSnackBar} from '@angular/material';
import {HttpEventType, HttpResponse} from '@angular/common/http';


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

  public constructor(private assignmentService: AssignmentService,
                     private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  public uploadedAssignment(files: File[]) {
    const task = {
      file: files[0],
      assignmentId: this.assignment.id,
    };
    this.handInAssignment.emit(task);

    this.assignmentService.uploadAssignment(task)
      .subscribe(event => {
          console.log(event);
          if (event.type === HttpEventType.UploadProgress) {
            if (event.total) {
              // TODO Progressbar
            }
          } else if (event instanceof HttpResponse) {
            if (event.body) {
              // TODO somthing
            }
            this.snackBar.open('Assignment was uploaded', 'ok', {duration: 2000});
          }
        },
        err => {
          this.snackBar.open('Assignment was no uploaded', 'ok', {duration: 2000});
          console.error('Error uploading assignment', err);
        });
  }
}

/*
this.assignmentService.uploadAssignment(task)
.subscribe(event => {this.snackBar.open('Assignment was uploaded', 'ok', {duration: 2000}),
err => {
this.snackBar.open('Assignment was no uploaded', 'ok', {duration: 2000});
console.error('Error uploading assignment', err);
}); */
