import {Observable, ObservableInput} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/shareReplay';

/**
 * Only emits whenever the newest result is available
 * If a new result is being calculated, this will not emit
 * @param {(value: T) => ObservableInput<K>} switchMapOperation - The switchMap operation
 * @returns {Observable<K>}
 */
function sharedNewest<T, K>(this: Observable<T>, switchMapOperation: (value: T) => ObservableInput<K>): Observable<K> {
  const emitting = new BehaviorSubject(false);

  return this
    .do(() => emitting.next(false))
    .switchMap(switchMapOperation)
    .do(() => emitting.next(true))
    .shareReplay()
    .combineLatest(emitting)
    .filter(([result, emit]) => emit)
    .map(([result]) => result);
}


Observable.prototype.sharedNewest = sharedNewest;

declare module 'rxjs/Observable' {
  // noinspection TsLint
  interface Observable<T> {
    sharedNewest: typeof sharedNewest;
  }
}
