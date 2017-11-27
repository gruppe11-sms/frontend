/**
 * A loader exposes an observable that can aggregate loading information from multiple sources
 * Very useful when awaiting multiple network requests
 *
 * It maintains the loading status on a "Best effort" basis. If the before gets triggered a lot,
 * the this might before confused
 */
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

// Used for generating unique keys
let counter = 0;

export class Loader {
  private subject: BehaviorSubject<Map<string, boolean>> = new BehaviorSubject(new Map());

  private state: Observable<boolean> = this.subject
    .map(values => {

      // If any of the values in the map is loading, then we are still loading
      for (const [key, loading] of values) {
        if (loading) {
          return true;
        }
      }


      return false;
    })
    .share();

  /**
   * Gets an observable of the result
   * @returns {Observable<boolean>}
   */
  public get(): Observable<boolean> {
    return this.state;
  }

  /**
   * Call this before the request happens in a .do on an observable
   * Do not make your keys be a pure number, otherwise you are going
   * to get in trouble with wrapped requests at some point
   * @param {string} key - The key to bind for this requests
   * @returns {() => void}
   */
  public beforeRequest(key: string): () => void {
    return () => {
      const value = new Map(this.subject.value);
      value.set(key, true);
      this.subject.next(value);
    };
  }

  /**
   * Provides an easy wrapper on creating requests directly, that does not depend on other observables
   * @param {() => Observable<T>} cb
   * @returns {Observable<T>}
   */
  public wrapRequest<T>(cb: () => Observable<T>): Observable<T> {
    const key = `${counter++}`;
    const value = new Map(this.subject.value);
    value.set(key, true);
    this.subject.next(value);

    return cb()
      .do(this.afterRequest(key));
  }

  /**
   * Call this in a .do after the request happens
   * @param {string} key
   * @returns {Observer<T>}
   */
  public afterRequest<T>(key: string): Observer<T> {
    const onFinish = () => {
      const value = new Map(this.subject.value);
      value.delete(key);
      this.subject.next(value);
    };


    return {
      complete: onFinish,
      error: onFinish,
      next: () => {
        const value = new Map(this.subject.value);
        value.set(key, false);
        this.subject.next(value);
      },
    };
  }
}
