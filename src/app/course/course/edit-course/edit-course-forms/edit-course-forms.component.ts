import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../models/course';
import {User} from '../../../../models/user';

@Component({
  selector: 'app-edit-course-forms',
  templateUrl: './edit-course-forms.component.html',
  styleUrls: ['./edit-course-forms.component.scss']
})
export class EditCourseFormsComponent implements OnInit {

  @Output()
  public save = new EventEmitter<Course>();

  @Input()
  public course: Course;

  @Input()
  public users: User[];

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    let date = new Date(this.course.isoDates.startDate);
    this.course.startDate = date.getTime();
    date = new Date(this.course.isoDates.endDate);
    this.course.endDate = date.getTime();
    console.log('course is emitted' + this.course.title);

    this.save.emit(this.course);
  }

}
