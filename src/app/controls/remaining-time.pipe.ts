import {Pipe, PipeTransform} from '@angular/core';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const month = day * 30;
const year = day * 365;

const maxEntries = 2;

@Pipe({
  name: 'remainingTime',
})
export class RemainingTimePipe implements PipeTransform {

  transform(value: number): string {

    let isNegative = false;

    if (value < 0) {
      value = Math.abs(value);
      isNegative = true;
    }

    if (!value) {
      return '';
    }

    const years = Math.floor(value / year);
    value %= year;
    const months = Math.floor(value / month);
    value %= month;
    const weeks = Math.floor(value / week);
    value %= week;
    const days = Math.floor(value / day);
    value %= day;
    const hours = Math.floor(value / hour);
    value %= hour;
    const minutes = Math.floor(value / minute);
    value %= minute;
    const seconds = Math.floor(value / second);
    value %= second;

    let responseString = '';
    if (isNegative) {
      responseString += 'Overdue by';
    } else {
      responseString += 'Due in';
    }

    let valuesPrinted = 0;

    function addOutput(v: number, text: string) {
      if (v !== 0 && valuesPrinted < maxEntries) {
        valuesPrinted++;
        responseString += ` ${v} ${text}`;
        if (v > 0) {
          responseString += 's';
        }
      }
    }

    addOutput(years, 'year');
    addOutput(months, 'month');
    addOutput(weeks, 'week');
    addOutput(days, 'day');
    addOutput(hours, 'hour');
    addOutput(minutes, 'minute');
    addOutput(seconds, 'second');

    return responseString;
  }
}
