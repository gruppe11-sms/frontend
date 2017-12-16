import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CourseService} from '../../services/course.service';
import {Course} from '../models/course';
import {PermissionService} from '../../services/permission.service';
import {CourseManagerRole} from '../../consts';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public courses: Observable<Course[]>;
  public isCourseManager: Observable<boolean>;

  constructor(private courseService: CourseService, private permissionService: PermissionService) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this.isCourseManager = this.permissionService.hasAllRoles(CourseManagerRole);
  }
}
