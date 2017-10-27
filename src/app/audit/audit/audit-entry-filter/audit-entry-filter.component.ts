import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/startWith";
import {Filters, User} from "../../Filters";
import {PageEvent} from "@angular/material";

export interface ISearchArgs {
  userId: number;
  action: string;
}

export interface IPageUpdate {
  size: number;
  page: number;
}

@Component({
  selector: 'app-audit-entry-filter',
  templateUrl: './audit-entry-filter.component.html',
  styleUrls: ['./audit-entry-filter.component.scss']
})
export class AuditEntryFilterComponent implements OnInit {
  public userInputControl = new FormControl();
  public actionInputControl = new FormControl();

  @Input()
  public filters: Filters;

  @Input()
  public resultLength: number;

  @Output()
  public search = new EventEmitter<ISearchArgs>();

  @Output()
  public page = new EventEmitter<IPageUpdate>();

  public filteredUsers: Observable<User[]>;
  public filteredActions: Observable<string[]>;

  ngOnInit() {
    this.filteredUsers = this.userInputControl
      .valueChanges
      .startWith(null)
      .map(user => user && typeof user === 'object' ? user.name : user)
      .map(name => name ? this.filterByName(name) : this.filters ? this.filters.users : []);
    this.filteredActions = this.actionInputControl
      .valueChanges
      .startWith("")
      .map(val => val.toLowerCase())
      .map(val => this.filters ? this.filters.actions.filter(action => action.toLowerCase().includes(val)) : []);
  }


  public doSearch() {
    const args = {userId: 0, action: ""};
    if (this.userInputControl.value && typeof this.userInputControl.value === "object") {
      args.userId = this.userInputControl.value.id;
    }
    if (this.actionInputControl.value) {
      args.action = this.actionInputControl.value;
    }
    this.search.next(args);
  }

  public updatePage(event: PageEvent) {
    const update: IPageUpdate = {
      page: event.pageIndex,
      size: event.pageSize
    };
    this.page.next(update);
  }

  private filterByName(name: string) {
    return this.filters ? this.filters.users.filter(user => user.name.toLowerCase().includes(name)) : [];
  }

  public displayName(user: User): string {
    return user ? user.name : user;
  }
}
