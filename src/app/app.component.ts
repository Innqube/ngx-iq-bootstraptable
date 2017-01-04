import {Component} from '@angular/core';
import {MockDataService, Person} from './mock-data.service';
import {DataRequestConfig} from './components/data-request-config';
import {BootstrapTableColumn} from './components/bootstrap-table-column';
import {PaginatedResults} from './components/paginated-results';
import {FooterLegend} from './components/footer/footer-legend';

import '../style/app.scss';

@Component({
    selector: 'my-app', // <my-app></my-app>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    private paginatedResults: PaginatedResults<Person>;
    private pageSize: number;
    private columns: BootstrapTableColumn[] = [
        {
            name: 'Id',
            prop: 'id',
            width: 10,
            widthUnit: '%'
        }, {
            name: 'First name',
            prop: 'firstname',
            width: 30,
            widthUnit: '%'
        }, {
            name: 'Last name',
            prop: 'lastname',
            width: 30,
            widthUnit: '%'
        }, {
            name: 'E-Mail',
            prop: 'email',
            width: 30,
            widthUnit: '%'
        }
    ];
    private footerLegend: FooterLegend = {
        showingResults: 'Mostrando resultados',
        of: 'de',
        to: 'al',
        noresults: 'Sin resultados'
    };

    constructor(private mockDataService: MockDataService) {
    }

    loadData(drc: DataRequestConfig) {
        let sort = drc.orderBy ? drc.orderBy[0].property : null;
        let order = drc.orderBy ? drc.orderBy[0].direction : null;
        this
            .mockDataService
            .listPersons(drc.firstResult, drc.count, sort, order)
            .subscribe((paginatedResults: PaginatedResults<Person>) => this.paginatedResults = paginatedResults);
    }
}
