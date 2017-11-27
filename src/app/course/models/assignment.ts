import {IActivity} from './iactivity';

export class Assignment implements IActivity {
  activityId: number;
  id: number;
  description: string;
  title: string;
  startdate: number;
  enddate: number;
  remainingTime: number;
}
