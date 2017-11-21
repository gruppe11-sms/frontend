import {Course} from './course';
import {IActivity} from './iactivity';

export class Lesson implements IActivity {
  activityId: number;
  lessonId: number;
  lessonTitle: string;
  lesssonDescription: string;
  lessonCourse: Course;
  lessonRoom: number[];
  lessonStartDate: number;
  lessonEndDate: number;
}
