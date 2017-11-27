import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/**
 * Turns the observable into a behavior subject, so values are remember for later
 *
 * @param {T} initialValue - The initial value of the underlaying subject
 * @returns {Observable<T>}
 */
function behaviorSubject<T>(this: Observable<T>, initialValue: T): BehaviorSubject<T> {
  const subject = new BehaviorSubject<T>(initialValue);

  this.subscribe(
    value => subject.next(value),
    err => subject.error(err),
  );

  return subject;
}

Observable.prototype.behaviorSubject = behaviorSubject;

declare module 'rxjs/Observable' {
  // noinspection TsLint
  interface Observable<T> {
    behaviorSubject: typeof behaviorSubject;
  }
}
