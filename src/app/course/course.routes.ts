import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from './course/course.component';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';

export const courseRoutes: Routes = [
  {
    path: ':id',
    component: CourseDetailComponent,
  },
  /*{
    path: 'new',
    component: AddCourseComponent,
  },*/
  {
    path: '',
    component: CourseComponent,
  }
];

export const routes = RouterModule.forChild(courseRoutes);
