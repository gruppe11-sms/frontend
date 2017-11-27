import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from '../../models/assignment';
import {AssignmentService, UploadTask} from '../../assignment.service';

@Component({
  selector: 'app-all-assignments',
  templateUrl: './all-assignments.component.html',
  styleUrls: ['./all-assignments.component.scss']
})
export class AllAssignmentsComponent implements OnInit {

  @Input()
  public assignments: Assignment[];

  public uploadAssignment(task: UploadTask) {
  this.assignmentService.uploadAssignment(task);
}

  constructor(private assignmentService: AssignmentService) {
  }

  ngOnInit() {
  }

}
