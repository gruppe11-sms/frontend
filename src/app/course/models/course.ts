import {Participant} from "./participant";
import {Lesson} from "./lesson";
import {Assignment} from "./assignment";
import {Evaluation} from "./evaluation";

export class Course {

  id: number;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  participant: Participant[];
  lessons: Lesson[];
  assignment: Assignment[];
  courseEvaluations: Evaluation[];
  /*constructor(title: string, description: string,
              startDate: number, endDate: number) {}*/
}
