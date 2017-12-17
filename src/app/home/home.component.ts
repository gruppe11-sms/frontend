import {Component, OnInit} from '@angular/core';
import {Assignment} from '../models/assignment';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Course} from '../models/course';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public user: Observable<User>;

  public assignments: Observable<Assignment[]>;

  public courses: Observable<Course[]>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.route.data.map(data => data.me);
    this.assignments = this.route.data.map(data => data.assignments);
    this.courses = this.route.data.map(data => data.courses);
  }


}
