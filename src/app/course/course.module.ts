import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseComponent} from './course/course.component';
import {routes} from './course.routes';
import {CourseService} from './course.service';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AddCourseComponent} from './course/add-course/add-course.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditCourseComponent} from './course/edit-course/edit-course.component';
import {AllAssignmentsComponent} from './assignment/all-assignments/all-assignments.component';
import {CreateAssignmentComponent} from './assignment/create-assignment/create-assignment.component';
import {AssignmentService} from './assignment.service';
import {AssignmentDetailComponent} from './assignment/assignment-detail/assignment-detail.component';
import {CourseDetailFormsComponent} from './course/course-detail/course-detail-forms/course-detail-forms.component';
import {EditCourseFormsComponent} from './course/edit-course/edit-course-forms/edit-course-forms.component';
import {LessonDetailComponent} from './course/lesson-detail/lesson-detail.component';
import {LessonComponent} from './course/lesson/lesson.component';
import {AddLessonComponent} from './course/add-lesson/add-lesson.component';

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
    MatAutocompleteModule,
    MatSelectModule,
    MatChipsModule,
    MatSnackBarModule,
  ],
  providers: [
    CourseService,
    AssignmentService,
  ],
  declarations: [
    CourseComponent,
    CourseDetailComponent,
    CourseDetailFormsComponent,
    AddCourseComponent,
    EditCourseComponent,
    EditCourseFormsComponent,
    AllAssignmentsComponent,
    CreateAssignmentComponent,
    AssignmentDetailComponent,
    AddLessonComponent,
    LessonDetailComponent,
    LessonComponent,
  ],
})
export class CourseModule {
}
