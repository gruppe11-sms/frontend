import {HandInAssignment} from './handInAssignment';

export class Assignment {
  id: number;
  description: string;
  title: string;
  startDate: Date = new Date();
  endDate: Date = new Date();
  remainingTime: number;
  handinAssignments: HandInAssignment[];
}
