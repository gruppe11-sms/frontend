import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CourseService} from '../course.service';
import {Course} from '../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  test: string;
  public courses: Observable<Course[]>;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this.courses.subscribe(courses => courses.forEach(course => console.log(course)));
  }


  getCourses() {

  }

  getTest() {
    return this.test;
  }

}