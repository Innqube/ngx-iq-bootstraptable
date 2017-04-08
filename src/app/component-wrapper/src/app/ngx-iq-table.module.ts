/**
 * Created by diego on 4/6/17.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TableComponent} from './table/table.component';
import {FooterComponent} from './footer/footer.component';
import {PaginationService} from './pagination.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        TableComponent,
        FooterComponent
    ],
    exports: [
        TableComponent
    ],
    providers: [
        PaginationService
    ]
})
export class NgxIqTableModule {
}
