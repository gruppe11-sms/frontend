import {Participant} from "./participant";
import {Lesson} from "./lesson";
import {Assignment} from "./assignment";
import {Evaluation} from "./evaluation";
import {ISODates} from "./ISODates";

export class Course {

  id: number;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  isoDates: ISODates;
  participant: Participant[];
  lessons: Lesson[];
  assignment: Assignment[];
  courseEvaluations: Evaluation[];

  constructor(title: string, description: string, startDate: number, endDate: number) {
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
