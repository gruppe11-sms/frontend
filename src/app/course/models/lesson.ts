import {Course} from './course';

export class Lesson {
  lessonId: number;
  lessonTitle: string;
  lesssonDescription: string;
  lessonCourse: Course;
  lessonRoom: number[];
  lessonStartDate: number;
  lessonEndDate: number;
}
