import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dayfilter',
  pure: false
})
export class DayFilter implements PipeTransform {
  transform(items: any[], filter: number): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => new Date(item.endDate).getDay() === filter);
  }
}
