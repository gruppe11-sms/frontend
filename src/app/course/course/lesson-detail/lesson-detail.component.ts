import {Component, OnInit} from '@angular/core';
import {Lesson} from '../../models/lesson';
import {CourseService} from '../../../services/services/course.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  public lesson: Observable<Lesson>;
  constructor(private courseService: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.lesson = this.route.params
      .map(params => {
        return Number(params.id);
      })
      .switchMap(id => {
        return this.courseService.getLesson(Number(id));
      });

  }

}
