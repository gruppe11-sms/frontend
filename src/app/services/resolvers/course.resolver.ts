import {Course} from '../../models/course';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CourseService} from '../services/course.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private courseService: CourseService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    return this.courseService.getCourse(route.params.id);
  }

}
