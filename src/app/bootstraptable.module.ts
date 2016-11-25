import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableFooterComponent } from './components/footer/tablefooter.component';

import { DataRequestConfig } from './components/data-request-config';
import { PaginatedResults } from './components/paginated-results';
import { HeaderItem } from './components/header-item';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TableComponent,
    TableFooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class BootstrapTableModule {
  constructor() {}
}
