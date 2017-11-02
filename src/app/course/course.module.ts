import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseComponent} from './course/course.component';
import {routes} from './course.routes';
import {CourseService} from './course.service';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AddCourseComponent} from './course/add-course/add-course.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditCourseComponent} from './course/edit-course/edit-course.component';
import {EditCourseFormsComponent} from "./course/edit-course/edit-course-forms/edit-course-forms.component";


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
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [
    CourseService
  ],
  declarations: [CourseComponent, CourseDetailComponent, AddCourseComponent, EditCourseComponent, EditCourseFormsComponent]
})
export class CourseModule { }
