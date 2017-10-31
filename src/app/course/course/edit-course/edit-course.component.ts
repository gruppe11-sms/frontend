import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../course.service";
import {Participant} from "../../models/participant";
import {Lesson} from "../../models/lesson";
import {Assignment} from "../../models/assignment";
import {Evaluation} from "../../models/evaluation";
import {Course} from "../../models/course";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  public title: string;
  public description: string;
  public startDate: number;
  public endDate: number;
  public participants: Participant[];
  public lessons: Lesson[];
  public assignments: Assignment[];
  public evaluations: Evaluation[];
  private id: number;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => {
        this.id = Number(params.id);
      });
  }

  updateCourse(): void {
    this.courseService.updateCourse(this.id, new Course(this.title, this.description, this.startDate, this.endDate,
      this.participants, this.lessons, this.assignments, this.evaluations));
  }

}

