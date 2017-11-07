import {Participant} from './participant';
import {Lesson} from './lesson';
import {Assignment} from './assignment';
import {Evaluation} from './evaluation';

export interface Course {

  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  participants: Participant[];
  lessons: Lesson[];
  assignments: Assignment[];
  evaluations: Evaluation[];
}
