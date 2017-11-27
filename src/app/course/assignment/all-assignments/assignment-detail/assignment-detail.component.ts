import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {UploadTask} from '../../../assignment.service';

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

  constructor() {
  }

  public uploadedAssignment(files: File[]) {
    const task = {
      file: files[0],
      assignmentId: this.assignment.id
    };
    this.handInAssignment.emit(task);
  }

  ngOnInit() {
  }
}
