import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment} from '../../../models/assignment';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {

  @Input()
  public assignment: Assignment;

  @Output()
  public handInAssignment = new EventEmitter<File>();

  constructor() {
  }

  public uploadedAssignment(files: File[]) {
    const file = files[0];
    this.handInAssignment.emit(file);
  }

  ngOnInit() {
  }
}
