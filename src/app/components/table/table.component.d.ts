import { OnInit } from '@angular/core';
import { PaginatedResults } from '../paginated-results';
import { DataRequestConfig } from '../data-request-config';
import { BootstrapTableColumn } from '../bootstrap-table-column';
import { FooterLegend } from '../footer/footer-legend';
export declare class TableComponent implements OnInit {
    paginatedResults: PaginatedResults<any>;
    columns: BootstrapTableColumn[];
    pageSize: number;
    footerLegend: FooterLegend;
    private onLoadData;
    private rows;
    private currentPage;
    private sortProp;
    private sortDirection;
    constructor();
    ngOnInit(): void;
    onPageClicked(page: number): void;
    sort(prop: string): void;
    buildDataRequestConfig(): DataRequestConfig;
}
