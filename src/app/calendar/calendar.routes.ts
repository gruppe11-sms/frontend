import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';

const calendarRoutes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
];

export const routes = RouterModule.forChild(calendarRoutes);
