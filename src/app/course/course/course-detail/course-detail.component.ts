import {Component, OnInit} from '@angular/core';

import {Course} from '../../../models/course';
import {CourseService} from '../../../services/services/course.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import {Participant} from '../../../models/participant';
import {UserService} from '../../../services/services/user.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  public course: Observable<Course>;
  public participants: Observable<Participant[]>;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.course = this.route.data.map(data => data.course);

    this.participants = this.course
      .map(course => course.participants)
      .switchMap(participants => this.userService.getParticipantsWithNames(participants))
      .startWith([]);
  }
}

