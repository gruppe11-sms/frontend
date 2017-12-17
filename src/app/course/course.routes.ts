import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from './course/course.component';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {AddCourseComponent} from './course/add-course/add-course.component';
import {EditCourseComponent} from './course/edit-course/edit-course.component';
import {CreateAssignmentComponent} from './assignment/create-assignment/create-assignment.component';
import {LessonDetailComponent} from './course/lesson-detail/lesson-detail.component';
import {AddLessonComponent} from './course/add-lesson/add-lesson.component';
import {LessonComponent} from './course/lesson/lesson.component';
import {CourseResolver} from '../services/resolvers/course.resolver';
import {CourseListResolver} from '../services/resolvers/course-list.resolver';
import {MeResolver} from '../services/resolvers/me.resolver';
import {UserListResolver} from '../services/resolvers/user-list.resolver';

export const courseRoutes: Routes = [
  {
    path: ':courseId/lesson/new',
    component: AddLessonComponent,
    data: {
      animation: 'newlesson',
    },
  },
  {
    path: ':courseId/lesson/:id',
    component: LessonDetailComponent,
    data: {
      animation: 'lessondetail',
    },
  },
  {
    path: 'lessons',
    component: LessonComponent,
    data: {
      animation: 'lessons',
    },
  },
  {
    path: ':id/update',
    component: EditCourseComponent,
    data: {
      animation: 'editcourse',
    },
    resolve: {
      course: CourseResolver,
      users: UserListResolver,
    },
  },
  {
    path: 'new',
    component: AddCourseComponent,
    data: {
      animation: 'addcourse',
    },
  },
  {
    path: ':id',
    component: CourseDetailComponent,
    data: {
      animation: 'coursedetails',
    },
    resolve: {
      course: CourseResolver,
    },
  },
  {
    path: '',
    component: CourseComponent,
    data: {
      animation: 'courses',
    },
    resolve: {
      courses: CourseListResolver,
      me: MeResolver,
    },
  },
  {
    path: ':courseId/assignments/new',
    component: CreateAssignmentComponent,
    data: {
      animation: 'addassignment',
    },
  },
];


export const routes = RouterModule.forChild(courseRoutes);
