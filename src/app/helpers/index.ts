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

export function toQueryParameters(o: { [key: string]: any }): string {
  let params = [];

  for (const key in o) {
    if (o.hasOwnProperty(key)) {
      params.push(`${key}=${o[key]}`);
    }
  }

  return params.join('&');
}


export function fixMissingTimeStampHere(date: Date, timestamp: string): Date {
  const [hourS, minuteS] = timestamp.split(':');
  const hour = Number(hourS);
  const minutes = Number(minuteS);

  date.setHours(hour, minutes);
  return date;
}

export function equals(o1: { [key: string]: any }, o2: { [key: string]: any }): boolean {
  return compareEntries(o1, o2) && compareEntries(o2, o1);
}

function compareEntries(o1: { [key: string]: any }, o2: { [key: string]: any }) {
  for (const [key, value] of Object.entries(o1)) {
    if (o2[key] !== value) {
      return false;
    }
  }
  return true;
}
