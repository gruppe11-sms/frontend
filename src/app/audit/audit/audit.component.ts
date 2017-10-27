import {Component, OnInit} from '@angular/core';
import {AuditService} from "../audit.service";
import {AuditEntry} from "../AuditEntry";
import {Observable} from "rxjs/Observable";
import {Filters} from "../Filters";
import {IPageUpdate, ISearchArgs} from "./audit-entry-filter/audit-entry-filter.component";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/combineLatest";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  public entries: Observable<AuditEntry[]>;
  public resultCount: Observable<number>;
  public filters: Observable<Filters>;
  private allResults: Observable<AuditEntry[]>;
  private _search = new BehaviorSubject<ISearchArgs>({
    userId: 0,
    action: ''
  });
  private _pagination = new BehaviorSubject<IPageUpdate>({
    page: 0,
    size: 10
  });

  constructor(private auditService: AuditService) {
  }

  ngOnInit() {
    this.allResults = this._search
      .switchMap(args => this.auditService.getEntries(args));

    this.resultCount = this.allResults.map(entries => entries.length).startWith(0);

    this.entries = this.allResults.combineLatest(this._pagination)
      .map(([results, paging]) => {
        return results.slice(paging.page * paging.size, (paging.page + 1) * paging.size);
      });

    this.filters = this.auditService.getFilters();
  }

  public search(args: ISearchArgs) {
    this._search.next(args);
  }

  public updatePage(args: IPageUpdate) {
    this._pagination.next(args);
  }

}
