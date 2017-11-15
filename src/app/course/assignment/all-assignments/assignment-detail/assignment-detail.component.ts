import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from '../../../models/assignment';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {

  @Input()
  public assignment: Assignment;

  constructor() {
  }

  ngOnInit() {
  }

}
