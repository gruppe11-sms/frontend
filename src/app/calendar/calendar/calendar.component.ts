import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../../services/activity.service';
import {Activity} from '../../models/activity';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  daysOfWeek = [
    {name: 'Monday', number: 1},
    {name: 'Tuesday', number: 2},
    {name: 'Wednesday', number: 3},
    {name: 'Thursday', number: 4},
    {name: 'Friday', number: 5},
    {name: 'Saturday', number: 6},
    {name: 'Sunday', number: 7}
  ];

  private weekActivities: Observable<object[]>;
  private activities: Observable<Activity[]>;
  private week: BehaviorSubject<number> = new BehaviorSubject(CalendarComponent.getWeek(new Date(Date.now())));

  public constructor(private activityService: ActivityService) {
  }

  private static getWeek(date: Date): number {
    const date1 = new Date(date);
    const d: Date = new Date(Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getFullYear(), 0, 1));
    return Math.ceil(((( d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  }

  public ngOnInit() {
    this.activities = this.activityService.getActivities();
    this.weekActivities = this.activities.combineLatest(this.week)
      .map(([activities, week]) => {
        return activities.filter(activity => week === CalendarComponent.getWeek(activity.endDate))
      })
  }

  public decrementWeek() {
    if (this.week.value > 0) this.week.next(this.week.value - 1);
  }

  public incrementWeek() {
    if (this.week.value < 53) this.week.next(this.week.value + 1);
  }
}
