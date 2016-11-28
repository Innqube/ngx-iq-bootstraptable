"use strict";
const core_1 = require('@angular/core');
const mock_data_service_1 = require('./mock-data.service');
const paginated_results_1 = require('./components/paginated-results');
require('../style/app.scss');
class AppComponent {
    constructor(mockDataService) {
        this.mockDataService = mockDataService;
        this.headerItems = [
            {
                name: "Id",
                prop: "id"
            }, {
                name: "First name",
                prop: "firstname"
            }, {
                name: "Last name",
                prop: "lastname"
            }, {
                name: "E-Mail",
                prop: "email"
            }
        ];
    }
    loadData(drc) {
        this
            .mockDataService
            .listPersons(drc.firstResult, drc.count, drc.orderBy[0].property, drc.orderBy[0].direction)
            .subscribe((persons) => {
            let pr = new paginated_results_1.PaginatedResults();
            pr.count = persons.length;
            pr.cursor = drc.firstResult;
            pr.pageSize = 15;
            pr.results = persons;
            return pr;
        });
    }
}
AppComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'my-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            },] },
];
AppComponent.ctorParameters = [
    { type: mock_data_service_1.MockDataService, },
];
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map