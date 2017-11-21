import {Course} from './course';
import {IActivity} from './iactivity';

export class Lesson implements IActivity {
  activityId: number;
  id: number;
  title: string;
  description: string;
  Course: Course;
  lessonRoom: number[];
  startDate: number;
  endDate: number;
}
