import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../course.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss'],
})
export class AddLessonComponent implements OnInit {
  public title: string;
  public startDate: Date;
  public endDate: Date;
  public startTime: string;
  public endTime: string;

  constructor(private courseservice: CourseService, private route: ActivatedRoute, private snackbar: MatSnackBar) {
  }

  ngOnInit() {
  }

  public createLesson(): void {
    this.startDate = this.fixMissingTimeStampHere(this.startDate, this.startTime);
    this.endDate = this.fixMissingTimeStampHere(this.endDate, this.endTime);
    const courseId = this.route.snapshot.params.courseId;
    this.courseservice.createLesson(this.title, this.startDate, this.endDate, courseId)
      .subscribe(() => {
        this.snackbar.open('Lesson Created', '', {
          duration: 5000,
        });
      });
  }

  public fixMissingTimeStampHere(date: Date, timestamp: string): Date {
    const [hourS, minuteS] = timestamp.split(':');
    const hour = Number(hourS);
    const minutes = Number(minuteS);

    date.setHours(hour, minutes);
    return date;
  }
}
