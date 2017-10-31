import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  public user: User;

  constructor() {
  }

  ngOnInit() {
  }

}
