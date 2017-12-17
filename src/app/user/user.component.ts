import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Observable<User>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.route.data.map(data => data.me);
  }
}
