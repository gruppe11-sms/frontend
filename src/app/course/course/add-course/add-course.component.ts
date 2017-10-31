import {Component, OnInit} from '@angular/core';
import {Participant} from '../../models/participant';
import {CourseService} from '../../course.service';
import {Lesson} from '../../models/lesson';
import {Assignment} from '../../models/assignment';
import {Evaluation} from '../../models/evaluation';
import {Course} from "../../models/course";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  participant: Participant[];
  lessons: Lesson[];
  assignment: Assignment[];
  courseEvaluations: Evaluation[];
  constructor(private courseService: CourseService) { }

  ngOnInit(
  ) {
  }

  createCourse(title: string, description: string, startDate: number, endDate: number) {
    this.courseService.createCourse(new Course(title, description, startDate, endDate));
  }


}
