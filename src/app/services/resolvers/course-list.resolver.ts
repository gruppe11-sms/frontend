import {Course} from '../../models/course';
import {Resolve} from '@angular/router';
import {CourseService} from '../services/course.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class CourseListResolver implements Resolve<Course[]> {
  constructor(private courseService: CourseService) {

  }

  resolve(): Observable<Course[]> {
    return this.courseService.getCourses();
  }
}
