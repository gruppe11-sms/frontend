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
    this.save.emit(this.course);
  }
}
