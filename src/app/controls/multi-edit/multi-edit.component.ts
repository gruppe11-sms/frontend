import {animate, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material';

@Component({
  selector: 'app-multi-edit',
  templateUrl: './multi-edit.component.html',
  styleUrls: ['./multi-edit.component.scss'],
  animations: [
    trigger('listElements', [
      transition(':enter', [
        style({opacity: 0, height: 0}),
        animate('500ms', style({opacity: 1, height: '*'})),
      ]),
      transition(':leave', [
        style({opacity: 1, height: '*'}),
        animate('500ms', style({opacity: 0, height: 0})),
      ]),
    ]),
  ],
})
export class MultiEditComponent implements OnInit, OnChanges {

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
  public filteredOptions: any[];
  private lastSearchValue = '';

  constructor() {
    // HAXXING IN PROGRESS
    this.displayWithSafe = this.displayWithSafe.bind(this);
  }

  ngOnInit() {
    this.searchControl
      .valueChanges
      .startWith('')
      .map(val => val && typeof val === 'object' ? this.displayWithSafe(val) : val)
      .map(val => val.toLowerCase())
      .subscribe(val => {
        this.lastSearchValue = val;
        this.updateAvailableOptions();
      });
  }

  ngOnChanges() {
    this.updateAvailableOptions();
  }

  private updateAvailableOptions() {
    this.filteredOptions = this.filter(this.lastSearchValue);
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

  public displayWithSafe(val: any): string {
    return val ? this.displayWith(val) : '';
  }
}
