import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from './course/course.component';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {AddCourseComponent} from './course/add-course/add-course.component';

export const courseRoutes: Routes = [
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
  }
];


export const routes = RouterModule.forChild(courseRoutes);
