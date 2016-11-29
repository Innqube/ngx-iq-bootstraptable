"use strict";
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./app.component');
const table_component_1 = require('./components/table/table.component');
const tablefooter_component_1 = require('./components/footer/tablefooter.component');
const mock_data_service_1 = require('./mock-data.service');
class BootstrapTableModule {
    constructor() {
    }
}
BootstrapTableModule.decorators = [
    { type: core_1.NgModule, args: [{
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
            },] },
];
BootstrapTableModule.ctorParameters = [];
exports.BootstrapTableModule = BootstrapTableModule;
//# sourceMappingURL=bootstraptable.module.js.map