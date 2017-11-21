import {Activity} from './activity';
import {IActivity} from './iactivity';
import {ActivityType} from './activitytype';

export class CalendarEntry {
  activity: Activity;
  activityDetail: IActivity;
  type: ActivityType;
}
