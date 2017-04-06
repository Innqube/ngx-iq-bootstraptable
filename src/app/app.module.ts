import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NgxIqTableModule} from './component-wrapper/src/app/ngx-iq-table.module';
import {MockDataService} from './mock-data.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxIqTableModule
    ],
    providers: [
        MockDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
