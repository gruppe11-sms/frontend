import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {ControlsModule} from '../controls/controls.module';
import {AssignmentService} from './assignment.service';
import {AllAssignmentsComponent} from './assignment/all-assignments/all-assignments.component';
import {AssignmentDetailComponent} from './assignment/all-assignments/assignment-detail/assignment-detail.component';
import {CreateAssignmentComponent} from './assignment/create-assignment/create-assignment.component';
import {routes} from './course.routes';
import {CourseService} from './course.service';
import {AddCourseComponent} from './course/add-course/add-course.component';
import {AddLessonComponent} from './course/add-lesson/add-lesson.component';
import {CourseDetailFormsComponent} from './course/course-detail/course-detail-forms/course-detail-forms.component';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {CourseComponent} from './course/course.component';
import {EditCourseComponent} from './course/edit-course/edit-course.component';
import {LessonDetailComponent} from './course/lesson-detail/lesson-detail.component';
import {LessonComponent} from './course/lesson/lesson.component';

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
    ControlsModule,
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
