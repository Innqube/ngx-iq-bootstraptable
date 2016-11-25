"use strict";
const core_1 = require('@angular/core');
const paginated_results_1 = require('../paginated-results');
const data_request_config_1 = require('../data-request-config');
class TableComponent {
    constructor() {
        this.headerItems = [];
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
}
TableComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'iq-bt-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.css']
            },] },
];
TableComponent.ctorParameters = [];
TableComponent.propDecorators = {
    'paginatedResults': [{ type: core_1.Input },],
    'headerItems': [{ type: core_1.Input },],
    'pageSize': [{ type: core_1.Input },],
    'onLoadData': [{ type: core_1.Output },],
    'rows': [{ type: core_1.ContentChild, args: ['rows',] },],
};
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map