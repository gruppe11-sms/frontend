import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Assignment} from './models/assignment';

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
      startdate: startDate.getTime() / 1000,
      enddate: endDate.getTime() / 1000,
    });
  }

  public uploadAssignment(task: UploadTask) {
    console.log(task.assignmentId);
    const {file, assignmentId} = task;
    // TODO valider bruger rettigheder smid ex hvis denne er falsk
    const data = new FormData();
    data.append('file', file);
    data.append('assignmentId', assignmentId.toString());
    const request = new HttpRequest('POST', '/api/courses/assignments/uploadAssignments', data, {
      reportProgress: true,
    });
  }
}
