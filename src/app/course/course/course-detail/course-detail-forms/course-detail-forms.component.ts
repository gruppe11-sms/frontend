import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../../models/course';
import {Participant} from '../../../../models/participant';

@Component({
  selector: 'app-course-detail-forms',
  templateUrl: './course-detail-forms.component.html',
  styleUrls: ['./course-detail-forms.component.scss']
})
export class CourseDetailFormsComponent implements OnInit {

  @Input()
  public course: Course;

  @Input()
  public participants: Participant;

  constructor() { }


  ngOnInit(
  ) {
  }
}
