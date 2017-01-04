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
const mock_data_service_1 = require("./mock-data.service");
require("../style/app.scss");
let AppComponent = class AppComponent {
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
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
    }),
    __metadata("design:paramtypes", [mock_data_service_1.MockDataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map