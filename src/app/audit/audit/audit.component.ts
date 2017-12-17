import {Component, OnInit} from '@angular/core';
import {AuditService} from '../audit.service';
import {AuditEntry} from '../AuditEntry';
import {Observable} from 'rxjs/Observable';
import {Filters} from '../Filters';
import {IPageUpdate, ISearchArgs} from './audit-entry-filter/audit-entry-filter.component';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/skip';

import {equals} from '../../helpers';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
})
export class AuditComponent implements OnInit {
  public entries: Observable<AuditEntry[]>;
  public resultCount: Observable<number>;
  public filters: Observable<Filters>;
  private allResults: Observable<AuditEntry[]>;
  private _search: Observable<ISearchArgs>;
  private _pagination: Observable<IPageUpdate>;

  constructor(private auditService: AuditService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._search = this.route.queryParams.map(params => ({
      userId: params.userId || 0,
      action: params.action || '',
    })).distinctUntilChanged(equals);

    this._pagination = this.route.queryParams.map(params => ({
      page: parseInt(params.page || '0', 10),
      size: parseInt(params.size || '10', 10),
    })).distinctUntilChanged(equals);

    this.allResults = this.route.data.map(data => data.entries)
      .merge(
        this._search.skip(1)
          .switchMap(args => this.auditService.getEntries(args))
          .share(),
      );

    this.resultCount = this.allResults.map(entries => entries.length).startWith(0);

    this.entries = this.allResults
      .combineLatest(this._pagination)
      .map(([results, paging]) => {
        return results.slice(paging.page * paging.size, (paging.page + 1) * paging.size);
      }).share();

    this.filters = this.route.data.map(data => data.filters);
  }

  public search(args: ISearchArgs) {
    this.router.navigate([], {
      queryParams: args,
      replaceUrl: true,
      queryParamsHandling: 'merge',
    });
  }

  public updatePage(args: IPageUpdate) {
    this.router.navigate([], {
      queryParams: args,
      replaceUrl: true,
      queryParamsHandling: 'merge',
    });
  }

}
