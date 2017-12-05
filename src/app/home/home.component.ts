import {Component, OnInit} from '@angular/core';
import {AssignmentService} from '../services/assignment.service';
import {Assignment} from '../course/models/assignment';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {MeService} from '../services/me.service';
import {Course} from '../course/models/course';
import {CourseService} from '../services/course.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public user: Observable<User>;

  public assignments: Observable<Assignment[]>;

  public courses: Observable<Course[]>;

  constructor(private meService: MeService,
              private assignmentService: AssignmentService,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.user = this.meService.me;
    this.assignments = this.assignmentService.getComingAssignments();
    this.courses = this.courseService.getCourses();
  }


}
