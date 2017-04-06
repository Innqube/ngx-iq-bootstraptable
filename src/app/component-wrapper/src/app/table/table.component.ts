import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {TableResultsPage} from '../table-results-page';
import {PageRequestData} from '../page-request-data';
import {TableColumn} from '../table-column';
import {FooterLegend} from '../footer/footer-legend';
import {Observable} from 'rxjs/Observable';
import {ColumnOrder} from '../column-order';

@Component({
    selector: 'ngx-iq-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent<T> implements OnInit {

    @Input() dataSource: (requestPageData: PageRequestData) => Observable<TableResultsPage<T>>;
    @Input() columns: TableColumn[] = [];
    @Input() pageSize: number;
    @Input() footerLegend: FooterLegend = {
        showingResults: 'Showing results',
        of: 'of',
        to: 'to',
        noresults: 'No results'
    };
    resultsPage: TableResultsPage<T>;
    @ContentChild('rows') rows: any;

    private currentPage = 0;
    private columnOrdering: ColumnOrder[] = [];

    constructor() {
    }

    ngOnInit() {
        this.resultsPage = new TableResultsPage<any>();
        const drc = this.buildDataRequestConfig();
        this.loadData(drc);
    }


    onPageClicked(page: number) {
        this.currentPage = page;
        const drc = this.buildDataRequestConfig();
        this.loadData(drc);
    }

    sort(prop: string) {
        if (this.columnOrdering.length === 0) {
            this.columnOrdering.push({
                property: prop,
                direction: 'asc'
            });
        } else {
            let indexToRemove = -1;
            this.columnOrdering.forEach((columnOrder, index) => {
                if (columnOrder.property === prop) {
                    indexToRemove = index;
                }
            });
            if (indexToRemove > 0) {
                const previousDirection = this.columnOrdering[indexToRemove].direction;
                this.columnOrdering.splice(indexToRemove, 1);
                this.columnOrdering.splice(0, 0, {
                    property: prop,
                    direction: previousDirection === 'asc' ? 'desc' : 'asc'
                });
            } else if (indexToRemove === 0) {
                const previousDirection = this.columnOrdering[indexToRemove].direction;
                this.columnOrdering[indexToRemove].direction = previousDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.columnOrdering.splice(0, 0, {
                    property: prop,
                    direction: 'asc'
                });
            }
        }

        const drc = this.buildDataRequestConfig();
        this.loadData(drc);
    }

    buildDataRequestConfig(): PageRequestData {
        const drc = new PageRequestData();
        drc.firstResult = this.currentPage * this.pageSize;
        drc.count = this.pageSize;
        drc.orderBy = this.columnOrdering;
        return drc;
    }

    private loadData(requestPageData: PageRequestData) {
        this.dataSource(requestPageData)
            .subscribe((resultsPage) => this.resultsPage = resultsPage);
    }

    getSortDirection(column: TableColumn): 'asc' | 'desc' {
        let sortDirection;
        this.columnOrdering
            .forEach((c) => {
                if (column.prop === c.property) {
                    sortDirection = c.direction;
                }
            });
        return sortDirection;
    }
}
