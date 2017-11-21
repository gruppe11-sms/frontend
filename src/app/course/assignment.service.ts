import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Assignment} from './models/assignment';

@Injectable()
export class AssignmentService {

  constructor(private httpClient: HttpClient) {
  }

  public createAssignment(title: string, description: string, startDate: Date, endDate: Date, courseId: number): Observable<Assignment> {
    return this.httpClient.post<Assignment>(`/api/courses/${courseId}/assignments`, {
      title, description,
      startdate: startDate.getTime() / 1000,
      enddate: endDate.getTime() / 1000,
    });
  }

  public uploadAssignment(file: File) {
    console.log(file.size);
    const data = new FormData();
    data.append('file', file);
    // const reader = new FileReader();
    /*reader.readAsText(file);
    reader.addEventListener('loadend', e => {
      const text = e.srcElement ? e.srcElement.textContent : '';
      console.log('Text is ' + text);
    });
    */
    const request = new HttpRequest('POST', '/api/file', data, {
      reportProgress: true,
    });
  }

}
