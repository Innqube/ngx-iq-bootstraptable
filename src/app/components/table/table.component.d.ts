import { OnInit } from '@angular/core';
import { PaginatedResults } from '../paginated-results';
import { DataRequestConfig } from '../data-request-config';
import { HeaderItem } from '../header-item';
export declare class TableComponent implements OnInit {
    paginatedResults: PaginatedResults<any>;
    headerItems: HeaderItem[];
    pageSize: number;
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
