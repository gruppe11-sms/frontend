import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from '../../models/assignment';

@Component({
  selector: 'app-all-assignments',
  templateUrl: './all-assignments.component.html',
  styleUrls: ['./all-assignments.component.scss']
})
export class AllAssignmentsComponent implements OnInit {

  @Input()
  public assignments: Assignment[];

  constructor() {
  }

  ngOnInit() {
  }

}
