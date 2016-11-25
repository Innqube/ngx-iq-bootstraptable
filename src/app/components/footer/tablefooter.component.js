"use strict";
const core_1 = require('@angular/core');
const PAGES_LIMIT = 6;
class TableFooterComponent {
    constructor() {
        this.onPageClicked = new core_1.EventEmitter();
        this.currentPage = 0;
    }
    ngOnInit() {
    }
    getPageBeginning() {
        return this.paginatedResults.cursor + 1;
    }
    getPageEnd() {
        return Math.min(this.paginatedResults.cursor + this.paginatedResults.pageSize, this.paginatedResults.count);
    }
    getTotal() {
        return this.paginatedResults.count;
    }
    getPages() {
        let pages = [];
        let radio = PAGES_LIMIT / 2;
        let currentPage = this.currentPage;
        let totalPages = this.getTotalPages();
        let firstPage;
        let lastPage;
        if (totalPages - currentPage <= radio) {
            firstPage = Math.max(0, totalPages - PAGES_LIMIT);
            lastPage = totalPages;
        }
        else if (currentPage <= radio) {
            firstPage = 0;
            lastPage = Math.min(totalPages, PAGES_LIMIT);
        }
        else {
            firstPage = currentPage - radio;
            lastPage = currentPage + radio;
        }
        for (let i = firstPage; i < lastPage; i++) {
            pages.push(i + 1);
        }
        return pages;
    }
    getTotalPages() {
        return Math.ceil((this.getTotal() / this.paginatedResults.pageSize));
    }
    isPreviousPageVisible() {
        let currentPage = this.getCurrentPage();
        return currentPage > PAGES_LIMIT / 2 && this.getTotalPages() > PAGES_LIMIT;
    }
    isNextPageVisible() {
        let totalPages = this.getTotalPages();
        return totalPages - this.currentPage > PAGES_LIMIT / 2 && totalPages > PAGES_LIMIT;
    }
    pageClicked(page) {
        this.currentPage = page - 1;
        this.onPageClicked.emit(page - 1);
    }
    onPreviousClicked() {
        this.currentPage--;
        this.onPageClicked.emit(0);
    }
    onNextClicked() {
        this.currentPage++;
        this.onPageClicked.emit(this.currentPage);
    }
    getCurrentPage() {
        return this.currentPage;
    }
}
TableFooterComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'iq-bt-footer',
                templateUrl: './tablefooter.component.html',
                styleUrls: ['./tablefooter.component.css']
            },] },
];
TableFooterComponent.ctorParameters = [];
TableFooterComponent.propDecorators = {
    'paginatedResults': [{ type: core_1.Input },],
    'onPageClicked': [{ type: core_1.Output },],
};
exports.TableFooterComponent = TableFooterComponent;
//# sourceMappingURL=tablefooter.component.js.map