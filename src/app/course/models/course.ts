import {Assignment} from './assignment';
import {Evaluation} from './evaluation';
import {Lesson} from './lesson';
import {Participant} from './participant';

export class Course {

  id = 0;
  title = '';
  description = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  participants: Participant[] = [];
  lessons: Lesson[] = [];
  assignments: Assignment[] = [];
  evaluations: Evaluation[] = [];
}
