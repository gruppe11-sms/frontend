import {Component, OnInit} from '@angular/core';
import {Participant} from '../../models/participant';
import {CourseService} from '../../course.service';
import {Lesson} from '../../models/lesson';
import {Assignment} from '../../models/assignment';
import {Evaluation} from '../../models/evaluation';
import {Course} from "../../models/course";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public courseTitle: string;
  public courseDescription: string;
  public startDate: number;
  public endDate: number;

  constructor(private courseService: CourseService) { }

  ngOnInit(
  ) {

  }

  createCourse() {
    this.courseService.createCourse(new Course(this.courseTitle, this.courseDescription, this.startDate, this.endDate));
  }


}
