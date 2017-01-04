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
const data_request_config_1 = require("../data-request-config");
const footer_legend_1 = require("../footer/footer-legend");
let TableComponent = class TableComponent {
    constructor() {
        this.columns = [];
        this.footerLegend = {
            showingResults: 'Showing results',
            of: 'of',
            to: 'to'
        };
        this.onLoadData = new core_1.EventEmitter();
        this.currentPage = 0;
    }
    ngOnInit() {
        this.paginatedResults = new paginated_results_1.PaginatedResults();
        let drc = this.buildDataRequestConfig();
        this.onLoadData.emit(drc);
    }
    onPageClicked(page) {
        this.currentPage = page;
        let drc = this.buildDataRequestConfig();
        this.onLoadData.emit(drc);
    }
    sort(prop) {
        if (this.sortProp === prop) {
            this.sortDirection = 'asc' === this.sortDirection ? 'desc' : 'asc';
        }
        else {
            this.sortProp = prop;
            this.sortDirection = 'asc';
        }
        let drc = this.buildDataRequestConfig();
        this.onLoadData.emit(drc);
    }
    buildDataRequestConfig() {
        let drc = new data_request_config_1.DataRequestConfig();
        drc.firstResult = this.currentPage * this.pageSize;
        drc.count = this.pageSize;
        drc.orderBy = [{
                property: this.sortProp,
                direction: this.sortDirection
            }];
        return drc;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", paginated_results_1.PaginatedResults)
], TableComponent.prototype, "paginatedResults", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TableComponent.prototype, "columns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TableComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", footer_legend_1.FooterLegend)
], TableComponent.prototype, "footerLegend", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TableComponent.prototype, "onLoadData", void 0);
__decorate([
    core_1.ContentChild('rows'),
    __metadata("design:type", Object)
], TableComponent.prototype, "rows", void 0);
TableComponent = __decorate([
    core_1.Component({
        selector: 'iq-bt-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.css']
    }),
    __metadata("design:paramtypes", [])
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map