import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../models/user';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user-filter',
  templateUrl: './edit-user-filter.component.html',
  styleUrls: ['./edit-user-filter.component.scss'],
})
export class EditUserFilterComponent implements OnInit {

  public users: Observable<User[]>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.users = this.route.data.map(data => data.users);
  }
}


