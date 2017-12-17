import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../services/services/course.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {FormControl} from '@angular/forms';
import {fixMissingTimeStampHere} from '../../../helpers';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss'],
})
export class AddLessonComponent implements OnInit {
  public titleControl = new FormControl('');
  public startDateControl = new FormControl(new Date());
  public endDateControl = new FormControl(new Date());
  public startTimeControl = new FormControl('00:00');
  public endTimeControl = new FormControl('00:00');

  constructor(private courseservice: CourseService, private route: ActivatedRoute, private snackbar: MatSnackBar) {
  }

  ngOnInit() {
  }

  public createLesson(): void {
    const startDate = fixMissingTimeStampHere(this.startDateControl.value, this.startTimeControl.value);
    const endDate = fixMissingTimeStampHere(this.endDateControl.value, this.endTimeControl.value);
    const courseId = this.route.snapshot.params.courseId;
    this.courseservice.createLesson(this.titleControl.value, startDate, endDate, courseId)
      .subscribe(() => {
        this.snackbar.open('Lesson Created', '', {
          duration: 5000,
        });
      });
  }

}
