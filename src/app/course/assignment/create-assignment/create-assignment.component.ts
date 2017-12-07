import {Component, OnInit} from '@angular/core';
import {AssignmentService} from '../../../services/assignment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {fixMissingTimeStampHere} from '../../../helpers';

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
  public startTimeControl: FormControl;
  public endTimeControl: FormControl;

  public constructor(private assignmentService: AssignmentService,
                     private route: ActivatedRoute,
                     private router: Router) {
  }

  ngOnInit() {
    this.startTimeControl = new FormControl('');
    this.endTimeControl = new FormControl('');
  }

  public save() {
    this.startDate = fixMissingTimeStampHere(this.startDate, this.startTimeControl.value);
    this.endDate = fixMissingTimeStampHere(this.endDate, this.endTimeControl.value);
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
  }
}
