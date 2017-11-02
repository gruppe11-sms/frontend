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
