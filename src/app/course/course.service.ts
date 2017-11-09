import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Course} from './models/course';
import 'rxjs/add/operator/do';
import {Participant} from './models/participant';
import {Lesson} from './models/lesson';
import {Assignment} from './models/assignment';
import {Evaluation} from './models/evaluation';

export interface ICourseResponse {
  id: number;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  participant: Participant[];
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
          id: courseResponse.id,
          title: courseResponse.title,
          description: courseResponse.description,
          startDate: new Date(courseResponse.startDate),
          endDate: new Date(courseResponse.endDate),
          participants: courseResponse.participant,
          lessons: courseResponse.lessons,
          assignments: courseResponse.assignments,
          evaluations: courseResponse.evaluations,
        };
      }).do(course => course.assignments.forEach(assignment => assignment.remainingTime = assignment.enddate - Date.now()));
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

  updateCourse(id: number, course: Course) {
    console.log('updateing course' + course.title);
    return this.httpClient.put(`/api/courses/${id}`, course);
  }

  deleteCourse(id: number) {
    this.httpClient.delete(`/api/courses/${id}`);
  }

  createLesson(title: string, startDate: Date, endDate: Date, courseId: string): Observable<Lesson> {
    return this.httpClient.post(`/api/courses/${courseId}/lessons`, {
      title: title,
      startdate: startDate,
      enddate: endDate,
    });
  }
}

