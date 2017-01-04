"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const paginated_results_1 = require("../paginated-results");
const footer_legend_1 = require("./footer-legend");
const PAGES_LIMIT = 6;
let TableFooterComponent = class TableFooterComponent {
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
    isFirstPageVisible() {
        let currentPage = this.getCurrentPage();
        return currentPage > PAGES_LIMIT / 2 && this.getTotalPages() > PAGES_LIMIT;
    }
    isLastPageVisible() {
        let totalPages = this.getTotalPages();
        return totalPages - this.currentPage > PAGES_LIMIT / 2 && totalPages > PAGES_LIMIT;
    }
    pageClicked(page) {
        this.currentPage = page - 1;
        this.onPageClicked.emit(page - 1);
    }
    onFirstClicked() {
        this.currentPage = 0;
        this.onPageClicked.emit(this.currentPage);
    }
    onLastClicked() {
        this.currentPage = this.getTotalPages() - 1;
        this.onPageClicked.emit(this.currentPage);
    }
    getCurrentPage() {
        return this.currentPage;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", paginated_results_1.PaginatedResults)
], TableFooterComponent.prototype, "paginatedResults", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TableFooterComponent.prototype, "onPageClicked", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", footer_legend_1.FooterLegend)
], TableFooterComponent.prototype, "footerLegend", void 0);
TableFooterComponent = __decorate([
    core_1.Component({
        selector: 'iq-bt-footer',
        templateUrl: './tablefooter.component.html',
        styleUrls: ['./tablefooter.component.css']
    }),
    __metadata("design:paramtypes", [])
], TableFooterComponent);
exports.TableFooterComponent = TableFooterComponent;
//# sourceMappingURL=tablefooter.component.js.map