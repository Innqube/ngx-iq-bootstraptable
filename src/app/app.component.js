"use strict";
const core_1 = require('@angular/core');
require('../style/app.scss');
class AppComponent {
    constructor() {
        this.pipeTest = 'Create an amazing community by contributing a library';
        this.url = 'https://github.com/preboot/angular2-library-seed';
    }
}
AppComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'my-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            },] },
];
AppComponent.ctorParameters = [];
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map