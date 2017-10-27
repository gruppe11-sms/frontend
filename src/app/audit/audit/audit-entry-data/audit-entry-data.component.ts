import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-audit-entry-data',
  templateUrl: './audit-entry-data.component.html',
  styleUrls: ['./audit-entry-data.component.scss']
})
export class AuditEntryDataComponent implements OnInit {

  @Input()
  public data: any;
  public renderData: { key: string, value: any }[];

  constructor() {
  }

  ngOnInit() {
    this.renderData = [];
    for (let key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        this.renderData.push({
          key,
          value: this.data[key]
        });
      }
    }
  }

  public isString(value: any) {
    return typeof value === 'string';
  }
}
