import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NgxIqTableModule} from './component-wrapper/src/app/ngx-iq-table.module';
import {MockDataService} from './mock-data.service';
import {AppRoutingModule} from './app-routing.module';
import {TestComponent} from './test/test.component';
import {Test2Component} from './test2/test2.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        Test2Component
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        HttpModule,
        NgxIqTableModule,
        AppRoutingModule
    ],
    providers: [
        MockDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
