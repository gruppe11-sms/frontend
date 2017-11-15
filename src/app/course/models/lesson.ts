import {Course} from './course';

export class Lesson {
  id: number;
  title: string;
  description: string;
  Course: Course;
  lessonRoom: number[];
  startDate: number;
  endDate: number;
}
