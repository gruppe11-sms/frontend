import {HttpParams} from '@angular/common/http';

export function toHttpParams(o: { [key: string]: any }) {
  let params = new HttpParams();

  for (const key in o) {
    if (o.hasOwnProperty(key)) {
      params = params.append(key, String(o[key]));
    }
  }
  return params;
}


export function fixMissingTimeStampHere(date: Date, timestamp: string): Date {
  const [hourS, minuteS] = timestamp.split(':');
  const hour = Number(hourS);
  const minutes = Number(minuteS);

  date.setHours(hour, minutes);
  return date;
}
