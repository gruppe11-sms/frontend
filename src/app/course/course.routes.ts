import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from './course/course.component';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {AddCourseComponent} from './course/add-course/add-course.component';
import {EditCourseComponent} from './course/edit-course/edit-course.component';
import {CreateAssignmentComponent} from './assignment/create-assignment/create-assignment.component';
import {AssignmentDetailComponent} from './assignment/assignment-detail/assignment-detail.component';
import {LessonDetailComponent} from './course/lesson-detail/lesson-detail.component';
import {AddLessonComponent} from './course/add-lesson/add-lesson.component';
import {LessonComponent} from './course/lesson/lesson.component';

export const courseRoutes: Routes = [
  {
    path: ':id/lesson/new',
    component: AddLessonComponent,
  },
  {
    path: ':courseId/lesson/:id',
    component: LessonDetailComponent,
  },
  {
    path: 'lessons',
    component: LessonComponent,
  },
  {
    path: ':id/update',
    component: EditCourseComponent,
  },
  {
    path: 'new',
    component: AddCourseComponent,
  },
  {
    path: ':id',
    component: CourseDetailComponent,
  },
  {
    path: '',
    component: CourseComponent,
  },
  {
    path: ':courseId/assignments/new',
    component: CreateAssignmentComponent,
  },
  {
    path: ':courseId/assignments/:assignmentId',
    component: AssignmentDetailComponent,
  },
];


export const routes = RouterModule.forChild(courseRoutes);
