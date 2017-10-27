import {Component, OnInit} from '@angular/core';
import {AuditService} from "../audit.service";
import {AuditEntry} from "../AuditEntry";
import {Observable} from "rxjs/Observable";
import {Filters} from "../Filters";
import {ISearchArgs} from "./audit-entry-filter/audit-entry-filter.component";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  public entries: Observable<AuditEntry[]>;
  public filters: Observable<Filters>;
  private _search = new BehaviorSubject<ISearchArgs>({
    userId: 0,
    action: ''
  });

  constructor(private auditService: AuditService) {
  }

  ngOnInit() {
    this.entries = this._search
      .switchMap(args => this.auditService.getEntries(args));
    this.filters = this.auditService.getFilters();
  }

  public search(args: ISearchArgs) {
    this._search.next(args);
  }

}
