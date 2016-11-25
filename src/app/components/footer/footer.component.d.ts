import { OnInit, EventEmitter } from '@angular/core';
import { PaginatedResults } from '../paginated-results';
export declare class FooterComponent implements OnInit {
    paginatedResults: PaginatedResults<any>;
    onPageClicked: EventEmitter<number>;
    private currentPage;
    constructor();
    ngOnInit(): void;
    getPageBeginning(): number;
    getPageEnd(): number;
    getTotal(): number;
    getPages(): number[];
    getTotalPages(): number;
    isPreviousPageVisible(): boolean;
    isNextPageVisible(): boolean;
    pageClicked(page: number): void;
    onPreviousClicked(): void;
    onNextClicked(): void;
    getCurrentPage(): number;
}
