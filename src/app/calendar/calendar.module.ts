import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar/calendar.component';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule} from '@angular/material';
import {routes} from './calendar.routes';
import {DayFilter} from './day-filter';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    // ServicesModule,
    MatInputModule,
  ],
  declarations: [
    CalendarComponent,
    DayFilter
  ],
})
export class CalendarModule {
}
