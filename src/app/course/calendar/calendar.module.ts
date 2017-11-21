import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar/calendar.component';
import {MatDatepickerModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
  ],
  declarations: [
    CalendarComponent,
  ],
})
export class CalendarModule {
}
