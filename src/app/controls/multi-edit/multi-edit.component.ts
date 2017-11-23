import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {MatAutocompleteSelectedEvent} from '@angular/material';

@Component({
  selector: 'app-multi-edit',
  templateUrl: './multi-edit.component.html',
  styleUrls: ['./multi-edit.component.scss'],
})
export class MultiEditComponent implements OnInit {

  @Input()
  public values: any[];
  @Input()
  public displayWith: (item: any) => string;
  @Input()
  public options: any[];

  @Output()
  public selected = new EventEmitter();
  @Output()
  public removed = new EventEmitter();

  public searchControl = new FormControl();
  public filteredOptions: Observable<any[]>;

  constructor() {
  }

  ngOnInit() {
    this.filteredOptions = this.searchControl
      .valueChanges
      .startWith('')
      .map(val => val && typeof val === 'object' ? this.displayWith(val) : val)
      .map(val => val.toLowerCase())
      .map(val => this.filter(val));
  }

  filter(val: string): any[] {
    return (this.options || []).filter(option => this.displayWith(option).toLowerCase().includes(val));
  }

  remove(val: any) {
    this.removed.emit(val);
  }

  public select(event: MatAutocompleteSelectedEvent) {
    this.selected.emit(event.option.value);
    this.searchControl.setValue('');
  }
}
