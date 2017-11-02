import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../course.service';
import {Course} from "../../models/course";

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

  ngOnInit() {
  }

  createCourse() {
    console.log(this.courseTitle + this.courseDescription + this.startDate + this.endDate)
    this.courseService.createCourse(new Course(this.courseTitle, this.courseDescription, this.startDate, this.endDate)).subscribe();
  }


}
