import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from './course/course.component';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {AddCourseComponent} from './course/add-course/add-course.component';
import {EditCourseComponent} from './course/edit-course/edit-course.component';
import {CreateAssignmentComponent} from './assignment/create-assignment/create-assignment.component';
import {AssignmentDetailComponent} from './assignment/assignment-detail/assignment-detail.component';

export const courseRoutes: Routes = [
  {
    path: 'update/:id',
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
