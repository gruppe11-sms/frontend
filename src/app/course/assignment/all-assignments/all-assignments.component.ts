import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from '../../models/assignment';
import {AssignmentService} from '../../assignment.service';

@Component({
  selector: 'app-all-assignments',
  templateUrl: './all-assignments.component.html',
  styleUrls: ['./all-assignments.component.scss']
})
export class AllAssignmentsComponent implements OnInit {

  @Input()
  public assignments: Assignment[];

  public uploadAssignment(file: File) {
  this.assignmentService.uploadAssignment(file);
}

  constructor(private assignmentService: AssignmentService) {
  }

  ngOnInit() {
  }

}
