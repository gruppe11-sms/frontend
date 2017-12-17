import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Course} from '../../models/course';
import {PermissionService} from '../../services/services/permission.service';
import {CourseManagerRole} from '../../consts';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public courses: Observable<Course[]>;
  public isCourseManager: Observable<boolean>;

  constructor(private route: ActivatedRoute, private permissionService: PermissionService) {
  }

  ngOnInit() {
    this.courses = this.route.data.map(data => data.courses);
    this.isCourseManager = this.permissionService.hasAllRoles(CourseManagerRole);
  }
}
