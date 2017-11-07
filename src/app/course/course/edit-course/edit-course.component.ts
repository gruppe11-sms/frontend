import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../course.service';
import {Course} from '../../models/course';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';

import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public users: Observable<User[]>;
  public course: Observable<Course>;
  public id: number;
  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private userService: UserService) {
  }


  ngOnInit() {
    this.course = this.route.params
      .map(params => {
        this.id = Number(params.id)
        return Number(params.id);
      })
      .switchMap(id => {
        return this.courseService.getCourse(Number(id));
      });
    this.users = this.userService.getUsers();
  }

  updateCourse(course: Course): void {
    this.courseService.updateCourse(this.id, course).subscribe();
  }
}

