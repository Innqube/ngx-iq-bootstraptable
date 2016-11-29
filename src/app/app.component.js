"use strict";
const core_1 = require('@angular/core');
const mock_data_service_1 = require('./mock-data.service');
require('../style/app.scss');
class AppComponent {
    constructor(mockDataService) {
        this.mockDataService = mockDataService;
        this.columns = [
            {
                name: 'Id',
                prop: 'id',
                width: 10,
                widthUnit: '%'
            }, {
                name: 'First name',
                prop: 'firstname',
                width: 30,
                widthUnit: '%'
            }, {
                name: 'Last name',
                prop: 'lastname',
                width: 30,
                widthUnit: '%'
            }, {
                name: 'E-Mail',
                prop: 'email',
                width: 30,
                widthUnit: '%'
            }
        ];
        this.footerLegend = {
            showingResults: 'Mostrando resultados',
            of: 'de',
            to: 'al'
        };
    }
    loadData(drc) {
        this
            .mockDataService
            .listPersons(drc.firstResult, drc.count, drc.orderBy[0].property, drc.orderBy[0].direction)
            .subscribe((paginatedResults) => this.paginatedResults = paginatedResults);
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