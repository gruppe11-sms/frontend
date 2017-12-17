import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Assignment} from '../../models/assignment';
import 'rxjs/add/operator/share';
import {toHttpParams} from '../../helpers/index';
import {HandInAssignment} from '../../models/handInAssignment';

export interface UploadTask {
  file: File;
  assignmentId: number;
}

export interface IAssignmentResponse {
  id: number;
  description: string;
  title: string;
  startDate: number;
  endDate: number;
  remainingTime: number;
  handinAssignments: HandInAssignment[];
}

@Injectable()
export class AssignmentService {

  public constructor(private httpClient: HttpClient) {
  }

  public getOneAssignment(assignmentId: number): Observable<Assignment> {
    return this.httpClient.get<IAssignmentResponse>(`/api/courses/assignments/${assignmentId}`)
      .map(assignmentResponse => {
        return {
          ...assignmentResponse,
          startDate: new Date(assignmentResponse.startDate),
          endDate: new Date(assignmentResponse.endDate),
          remainingTime: (assignmentResponse.endDate) - (Date.now()),
        };
      });
  }

  public createAssignment(title: string, description: string, startDate: Date, endDate: Date, courseId: number): Observable<Assignment> {
    return this.httpClient.post<Assignment>(`/api/courses/${courseId}/assignments`, {
      title, description,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
    });
  }

  public getComingAssignments(args = {amount: 5}): Observable<Assignment[]> {
    const params = toHttpParams(args);
    return this.httpClient.get<IAssignmentResponse[]>(`/api/courses/home/assignments`, {params})
      .map(assignmentResponse => {
        return assignmentResponse.map(assignment => {
          return {
            ...assignment,
            startDate: new Date(assignment.startDate),
            endDate: new Date(assignment.endDate),
            remainingTime: (assignment.endDate) - (Date.now()),
          };
        });
      });
  }

  public uploadAssignment(task: UploadTask): Observable<HttpEvent<UploadTask>> {
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

