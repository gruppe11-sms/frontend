import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import {Assignment} from '../course/models/assignment';
import {Course} from '../course/models/course';
import {Evaluation} from '../course/models/evaluation';
import {Lesson} from '../course/models/lesson';
import {Participant} from '../course/models/participant';

export interface ICourseResponse {
  id: number;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  participants: Participant[];
  lessons: Lesson[];
  assignments: Assignment[];
  evaluations: Evaluation[];

}


@Injectable()
export class CourseService {

  constructor(private httpClient: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`/api/courses`);
  }

  getCourse(id: number): Observable<Course> {
    return this.httpClient.get<ICourseResponse>(`/api/courses/${id}`)
      .map(courseResponse => {
        return {
          ...courseResponse,
          startDate: new Date(courseResponse.startDate),
          endDate: new Date(courseResponse.endDate),
        };
      }).do(course => course.assignments.forEach(assignment => assignment.remainingTime = assignment.endDate - Date.now()));
  }

  getLessons(id: number): Observable<Lesson[]> {
    return this.httpClient.get<Lesson[]>(`/api/courses/${id}/lessons`);
  }

  getLesson(id: number): Observable<Lesson> {
    return this.httpClient.get<Lesson>(`api/courses/lessons/${id}`);
  }

  createCourse(course: Course): Observable<Course> {
    return this.httpClient.post(`/api/courses`, course);
  }

  updateCourse(course: Course) {
    return this.httpClient.put(`/api/courses/${course.id}`, {
      ...course,
      startDate: course.startDate.getTime(),
      endDate: course.endDate.getTime(),
    });
  }

  deleteCourse(id: number) {
    this.httpClient.delete(`/api/courses/${id}/delete`);
  }

  createLesson(title: string, startDate: Date, endDate: Date, courseId: string): Observable<Lesson> {
    return this.httpClient.post(`/api/courses/${courseId}/lessons`, {
      title: title,
      startdate: startDate,
      enddate: endDate,
    });
  }
}

