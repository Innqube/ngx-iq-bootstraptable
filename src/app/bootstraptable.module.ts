import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TableComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class BootstrapTableModule {
  constructor() {}
}
