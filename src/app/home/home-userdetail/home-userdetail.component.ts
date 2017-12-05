import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-home-userdetail',
  templateUrl: './home-userdetail.component.html',
  styleUrls: ['./home-userdetail.component.scss']
})
export class HomeUserdetailComponent implements OnInit {

  @Input()
  public user: User;

  constructor() { }

  ngOnInit() {
  }

}
