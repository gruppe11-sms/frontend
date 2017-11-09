import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss'],
})
export class AddLessonComponent implements OnInit {
  public lessonTitle: string;
  public lessonStartDate: Date;
  public lessonEndDate: Date;

  constructor(private lessonservice: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  public createLesson(): void {

  }

}
