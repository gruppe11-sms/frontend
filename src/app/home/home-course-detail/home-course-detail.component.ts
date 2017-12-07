import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../course/models/course';

@Component({
  selector: 'app-home-course-detail',
  templateUrl: './home-course-detail.component.html',
  styleUrls: ['./home-course-detail.component.scss']
})
export class HomeCourseDetailComponent implements OnInit {

  @Input()
  public course: Course;
  constructor() { }

  ngOnInit() {

  }

}
