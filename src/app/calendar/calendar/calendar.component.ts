import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../../services/activity.service';
import {Activity} from '../../models/activity';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/combineLatest';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  private activities: Observable<Activity[]>;
  private week: BehaviorSubject<number> = new BehaviorSubject(1);
  public weekActivities: Observable<Activity[]>;

  private static getWeek(date: Date): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getFullYear(), 0, 1));
    return Math.ceil(((( d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  }

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
    this.weekActivities = this.activities.combineLatest(this.week)
      .map(([activities, week]) => {
        return activities.filter(activity => Number(activity.endDate) === CalendarComponent.getWeek(activity.endDate));
      });
    console.log('Current week' + CalendarComponent.getWeek(new Date(Date.now())));
  }


  incrementWeek() {
    this.week.next(2);
  }

}
