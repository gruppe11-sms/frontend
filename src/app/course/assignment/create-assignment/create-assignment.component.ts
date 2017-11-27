import {Component, OnInit} from '@angular/core';
import {AssignmentService} from '../../assignment.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.scss'],
})
export class CreateAssignmentComponent implements OnInit {

  public title: string;
  public description: string;
  public startDate: Date;
  public endDate: Date;

  public constructor(private assignmentService: AssignmentService,
                     private route: ActivatedRoute,
                     private router: Router) {
  }

  ngOnInit() {
  }

  public save() {
    this.route.params
      .take(1)
      .map(params => params.courseId)
      .subscribe(courseId =>
        this.assignmentService
          .createAssignment(this.title, this.description, this.startDate, this.endDate, courseId)
          .subscribe(() => {
            this.router.navigate(['/courses', courseId]);
          }, err => {
            console.error(err);
          }),
      );
    // this.route.params.map(params => params.courseId)
    //   .subscribe(courseId => {
    //   this.router.navigate(['/courses', courseId]);
    //   }
    //   );
  }
}
