import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Assignment} from '../course/models/assignment';
import 'rxjs/add/operator/share';

export interface UploadTask {
  file: File;
  assignmentId: number;
}

@Injectable()
export class AssignmentService {

  public constructor(private httpClient: HttpClient) {
  }

  public createAssignment(title: string, description: string, startDate: Date, endDate: Date, courseId: number): Observable<Assignment> {
    return this.httpClient.post<Assignment>(`/api/courses/${courseId}/assignments`, {
      title, description,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
    });
  }

  public getComingAssignments(): Observable<Assignment[]> {
    return this.httpClient.get<Assignment[]>(`/api/courses/home/assignments`);
  }

  public uploadAssignment(task: UploadTask): Observable<HttpEvent<UploadTask>> {
    console.log(task.assignmentId + ' Frontend id');
    const {file, assignmentId} = task;
    // TODO valider bruger rettigheder smid ex hvis denne er falsk
    const data = new FormData();
    data.append('file', file);
    data.append('assignmentId', assignmentId.toString());
    const request = new HttpRequest('POST', '/api/courses/assignments/uploadAssignments', data, {
      reportProgress: true,
    });
    return this.httpClient.request(request).share();
  }
}

