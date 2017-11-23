import {Component, Input, OnInit} from '@angular/core';
import {CalendarEntry} from '../../course/models/calendarentry';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() CalendarEntries: CalendarEntry;

  constructor() {
  }

  ngOnInit() {
  }

}
