"use strict";
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./app.component');
const table_component_1 = require('./components/table/table.component');
const tablefooter_component_1 = require('./components/footer/tablefooter.component');
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
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
BootstrapTableModule.ctorParameters = [];
exports.BootstrapTableModule = BootstrapTableModule;
//# sourceMappingURL=bootstraptable.module.js.map