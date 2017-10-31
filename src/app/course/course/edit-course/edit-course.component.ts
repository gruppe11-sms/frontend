import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../course.service";
import {Participant} from "../../models/participant";
import {Lesson} from "../../models/lesson";
import {Assignment} from "../../models/assignment";
import {Evaluation} from "../../models/evaluation";
import {Course} from "../../models/course";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  updateCourse(id: number, title: string, description: string, startDate: number, endDate: number,
               participants: Participant[], lessons: Lesson[], assignments: Assignment[], evaluations: Evaluation[]): void {
    this.courseService.updateCourse(id, new Course(title, description, startDate, endDate,
                                                    participants, lessons, assignments, evaluations));
  }

}
