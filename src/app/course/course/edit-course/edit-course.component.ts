import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../course.service';
import {Course} from '../../models/course';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';

import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ISODates} from "../../models/ISODates";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public users: Observable<User[]>;
  public course: Observable<Course>;
  private id: number;
  // Idk what i was thinking
  /*
  public title: string;
  public description: string;
  public startDate: number;
  public endDate: number;
  public participants: Participant[];
  public lessons: Lesson[];
  public assignments: Assignment[];
  public evaluations: Evaluation[];
  */


  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private userService: UserService) {
  }


  ngOnInit() {
    this.course = this.route.params
      .map(params => {
        return Number(params.id);
      })
      .switchMap(id => {
        return this.courseService.getCourse(Number(id));
      })
      .do(course => {
        course.isoDates = new ISODates(new Date(course.startDate).toISOString(), new Date(course.endDate).toISOString());
      });

    this.users = this.userService.getUsers();
  }

  updateCourse(course: Course): void {
    console.log('forwarding course to service' + course.title)


    this.route.params
      .map(params => {
        this.id = Number(params.id);
      });

    this.courseService.updateCourse(this.id, course).subscribe();
  }

}

