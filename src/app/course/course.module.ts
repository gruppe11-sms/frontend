import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseComponent} from './course/course.component';
import {routes} from './course.routes';
import {CourseService} from './course.service';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatGridListModule, MatListModule, MatInputModule,
  MatIconModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AddCourseComponent} from './course/add-course/add-course.component';
import{FormsModule} from "@angular/forms";
import{ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    routes,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    CourseService
  ],
  declarations: [CourseComponent, CourseDetailComponent, AddCourseComponent]
})
export class CourseModule { }
