import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../services/course.service';
import {Course} from '../../models/course';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

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
    this.courseService.createCourse(course).subscribe(course => {
      this.router.navigate(['/courses', course.id]);
    });
  }
}
