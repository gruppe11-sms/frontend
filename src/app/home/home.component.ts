import {Component, OnInit} from '@angular/core';
import {Assignment} from '../models/assignment';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Course} from '../models/course';
import {ActivatedRoute} from '@angular/router';
import {MeService} from '../services/services/me.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public user: Observable<User>;

  public assignments: Observable<Assignment[]>;

  public courses: Observable<Course[]>;

  constructor(private route: ActivatedRoute, private meService: MeService) {
  }

  ngOnInit() {
    this.user = this.meService.me;
    this.assignments = this.route.data.map(data => data.assignments);
    this.courses = this.route.data.map(data => data.courses);
  }


}
