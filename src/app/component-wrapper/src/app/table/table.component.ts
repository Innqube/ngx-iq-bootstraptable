import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {TableResultsPage} from '../table-results-page';
import {PageRequestData} from '../page-request-data';
import {TableColumn} from '../table-column';
import {FooterLegend} from '../footer/footer-legend';
import {Observable} from 'rxjs/Observable';
import {ColumnOrder} from '../column-order';
import {TableStateService} from '../table-state.service';

@Component({
    selector: 'ngx-iq-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent<T> implements OnInit {

    @Input() tableId: string;
    @Input() dataSource: (requestPageData: PageRequestData) => Observable<TableResultsPage<T>>;
    @Input() columns: TableColumn[] = [];
    @Input() pageSize: number;
    @Input() footerLegend: FooterLegend = {
        showingResults: 'Showing results',
        of: 'of',
        to: 'to',
        noresults: 'No results'
    };
    @Input() currentPage = 0;
    resultsPage: TableResultsPage<T>;
    @ContentChild('rows') rows: any;
    private columnOrdering: ColumnOrder[] = [];

    constructor(private tableStateService: TableStateService) {
    }

    ngOnInit() {
        this.resultsPage = new TableResultsPage<any>();
        const drc = this.buildDataRequestConfig();
        this.loadData(drc);
        this.resolveInitialPagination();
    }

    private resolveInitialPagination() {
        if (this.tableId) {
            const tableState = this.tableStateService.state[this.tableId];
            if (tableState) {
                this.columnOrdering = tableState.ordering;
                this.onPageClicked(tableState.currentPage);
            } else {
                this.saveState();
            }
        }
    }

    private saveState() {
        this.tableStateService.state[this.tableId] = {
            currentPage: this.currentPage,
            ordering: this.columnOrdering
        };
    }

    onPageClicked(page: number) {
        this.currentPage = page;
        if (this.tableId) {
            this.saveState();
        }
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
        drc.from = this.currentPage * this.pageSize;
        drc.count = this.pageSize;
        drc.orderBy = this.columnOrdering;
        return drc;
    }

    private loadData(requestPageData: PageRequestData) {
        this.dataSource(requestPageData)
            .subscribe((resultsPage) => this.resultsPage = resultsPage);
    }

    refreshData() {
        this.loadData(this.buildDataRequestConfig());
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
