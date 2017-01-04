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
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const table_component_1 = require("./components/table/table.component");
const tablefooter_component_1 = require("./components/footer/tablefooter.component");
const mock_data_service_1 = require("./mock-data.service");
let BootstrapTableModule = class BootstrapTableModule {
    constructor() { }
};
BootstrapTableModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: [
            app_component_1.AppComponent,
            table_component_1.TableComponent,
            tablefooter_component_1.TableFooterComponent
        ],
        providers: [mock_data_service_1.MockDataService],
        bootstrap: [app_component_1.AppComponent],
        exports: [
            table_component_1.TableComponent, tablefooter_component_1.TableFooterComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], BootstrapTableModule);
exports.BootstrapTableModule = BootstrapTableModule;
//# sourceMappingURL=bootstraptable.module.js.map