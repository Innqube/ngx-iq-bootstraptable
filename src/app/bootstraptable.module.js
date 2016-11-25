"use strict";
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./app.component');
const table_component_1 = require('./components/table/table.component');
const footer_component_1 = require('./components/footer/footer.component');
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
                    footer_component_1.FooterComponent
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
BootstrapTableModule.ctorParameters = [];
exports.BootstrapTableModule = BootstrapTableModule;
//# sourceMappingURL=bootstraptable.module.js.map