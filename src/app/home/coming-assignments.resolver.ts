import {Assignment} from '../models/assignment';
import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {AssignmentService} from '../services/services/assignment.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ComingAssignmentsResolver implements Resolve<Assignment[]> {
  constructor(private assignmentService: AssignmentService) {

  }

  resolve(): Observable<Assignment[]> {
    return this.assignmentService.getComingAssignments();
  }
}
