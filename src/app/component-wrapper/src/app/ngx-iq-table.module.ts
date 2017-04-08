/**
 * Created by diego on 4/6/17.
 */
import {NgModule} from '@angular/core';
import {TableComponent} from './table/table.component';
import {FooterComponent} from './footer/footer.component';
import {TableStateService} from './table-state.service';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TableComponent,
        FooterComponent
    ],
    exports: [
        TableComponent
    ],
    providers: [
        TableStateService
    ]
})
export class NgxIqTableModule {
}
