import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar/calendar.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {routes} from './calendar.routes';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    routes,
  ],
  declarations: [
    CalendarComponent,
  ],
})
export class CalendarModule {
}
