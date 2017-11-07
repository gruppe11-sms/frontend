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
    console.log(this.courseTitle + this.courseDescription + this.startDate + this.endDate);
    const course = <Course>{
      title: this.courseTitle,
      description: this.courseDescription,
      startDate: new Date(this.startDate),
      endDate: new Date(this.endDate)
    };
    this.courseService.createCourse(course).subscribe();
  }


}
