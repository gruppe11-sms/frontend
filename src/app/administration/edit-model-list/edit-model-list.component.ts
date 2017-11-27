import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

interface IModel {
  id: number;
}

@Component({
  selector: 'app-edit-model-list',
  templateUrl: './edit-model-list.component.html',
  styleUrls: ['./edit-model-list.component.scss'],
})
export class EditModelListComponent implements OnInit {

  @Input()
  public current: BehaviorSubject<IModel[]>;
  @Input()
  public displayWith: (model: IModel) => string;
  @Input()
  public available: Observable<IModel[]>;

  public options: Observable<IModel[]>;

  constructor() {

  }

  ngOnInit() {
    this.options = this.removeExisting(this.available, this.current);
  }

  public add(model: IModel) {
    let values = this.current.value;
    values = [...values, model];
    this.current.next(values);
  }

  public remove(model: IModel) {
    let values = this.current.value;
    values = values.filter(value => value.id !== model.id);
    this.current.next(values);
  }

  private removeExisting<T extends IModel>(possibleObs: Observable<T[]>, currentObs: Observable<T[]>): Observable<T[]> {
    return possibleObs
      .combineLatest(currentObs
        .map(currents => (currents || [])
          .map(current => current.id)))
      .map(([possibles, currentIds]) => {
        return possibles.filter(possible => !currentIds.includes(possible.id));
      });

  }

}
