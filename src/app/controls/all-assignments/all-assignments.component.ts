import {Component, Input, OnInit} from '@angular/core';


import {Assignment} from '../../course/models/assignment';
import {AssignmentService, UploadTask} from '../../services/assignment.service';

@Component({
  selector: 'app-all-assignments',
  templateUrl: './all-assignments.component.html',
  styleUrls: ['./all-assignments.component.scss']
})
export class AllAssignmentsComponent implements OnInit {

  @Input()
  public assignments: Assignment[];

  constructor(private assignmentService: AssignmentService) {
  }

  public uploadAssignment(task: UploadTask) {
    this.assignmentService.uploadAssignment(task);
  }

  ngOnInit() {
  }

}
