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
  constructor(title: string, description: string,
              startDate: number, endDate: number,
              participants?: Participant[],
              lessons?: Lesson[],
              assignments?: Assignment[],
              courseEvaluations?: Evaluation[]) {
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.participant = participants || [];
    this.lessons = lessons || [];
    this.assignment = assignments || [];
    this.courseEvaluations = courseEvaluations || [];
  }
}
