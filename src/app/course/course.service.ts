import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Course} from './models/course';
import 'rxjs/add/operator/do';

@Injectable()
export class CourseService {

  constructor(private httpClient: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`/api/courses`);
  }

  getCourse(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`/api/courses/${id}`)
      .do(course => course.assignment
        .forEach(assignment => assignment.remainingTime = assignment.enddate - Date.now()));
  }

  createCourse(course: Course): void {
    this.httpClient.post(`/api/courses`, {course});
  }

  updateCourse(id: number): void {

  }

  deleteCourse(id: number): void {

  }

}
