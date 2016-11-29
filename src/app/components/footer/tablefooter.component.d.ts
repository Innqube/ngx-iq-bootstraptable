import { OnInit, EventEmitter } from '@angular/core';
import { PaginatedResults } from '../paginated-results';
import { FooterLegend } from './footer-legend';
export declare class TableFooterComponent implements OnInit {
    paginatedResults: PaginatedResults<any>;
    onPageClicked: EventEmitter<number>;
    private currentPage;
    footerLegend: FooterLegend;
    constructor();
    ngOnInit(): void;
    getPageBeginning(): number;
    getPageEnd(): number;
    getTotal(): number;
    getPages(): number[];
    getTotalPages(): number;
    isFirstPageVisible(): boolean;
    isLastPageVisible(): boolean;
    pageClicked(page: number): void;
    onFirstClicked(): void;
    onLastClicked(): void;
    getCurrentPage(): number;
}
