import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../services/services/course.service';
import {Observable} from 'rxjs/Observable';
import {Lesson} from '../../models/lesson';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  lessons: Observable<Lesson[]>;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.lessons = this.route.params
      .map(params => {
        return Number(params.id);
      })
      .switchMap(id => {
        return this.courseService.getLessons(Number(id));
      });
  }

}
