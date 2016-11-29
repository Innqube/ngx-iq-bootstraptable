import { Component, OnInit, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { PaginatedResults } from '../paginated-results';
import { DataRequestConfig } from '../data-request-config';
import { HeaderItem } from '../header-item';
import { FooterLegend } from '../footer/footer-legend';

@Component({
  selector: 'iq-bt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() paginatedResults: PaginatedResults<any>;
  @Input() headerItems: HeaderItem[] = [];
  @Input() pageSize: number;
  @Input() footerLegend: FooterLegend = {
    showingResults: 'Showing results',
    of: 'of',
    to: 'to'
  };
  @Output() private onLoadData = new EventEmitter<DataRequestConfig>();
  @ContentChild('rows') private rows: any;

  private currentPage: number = 0;
  private sortProp: string;
  private sortDirection: 'asc' | 'desc';

  constructor() { }

  ngOnInit() {
    this.paginatedResults = new PaginatedResults<any>();
    let drc = this.buildDataRequestConfig();
    this.onLoadData.emit(drc);
  }

  onPageClicked(page: number) {
    this.currentPage = page;
    let drc = this.buildDataRequestConfig();
    this.onLoadData.emit(drc);
  }

  sort(prop: string) {
    if (this.sortProp === prop) {
      this.sortDirection = 'asc' === this.sortDirection ? 'desc' : 'asc';
    } else {
      this.sortProp = prop;
      this.sortDirection = 'asc';
    }

    let drc = this.buildDataRequestConfig();
    this.onLoadData.emit(drc);
  }

  buildDataRequestConfig(): DataRequestConfig {
    let drc = new DataRequestConfig();
    drc.firstResult = this.currentPage * this.pageSize;
    drc.count = this.pageSize;
    drc.orderBy = [{
      property: this.sortProp,
      direction: this.sortDirection
    }];
    return drc;
  }

}
