import {Component, OnInit} from '@angular/core';

import {Course} from '../../models/course';
import {CourseService} from '../../../services/course.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Lesson} from '../../models/lesson';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  public course: Observable<Course>;
  public lessons: Observable<Lesson>;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.course = this.route.params
      .map(params => {
        return Number(params.id);
      })
      .switchMap(id => {
        return this.courseService.getCourse(Number(id));
      });
  }
}

