import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MockDataService, Person} from './mock-data.service';
import {PageRequestData} from './component-wrapper/src/app/page-request-data';
import {TableResultsPage} from './component-wrapper/src/app/table-results-page';
import {TableColumn} from 'app/component-wrapper/src/app/table-column';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    dataSource: (requestPageData: PageRequestData) => Observable<TableResultsPage<Person>>;
    columns: TableColumn[] = [
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

    constructor(private mockDataService: MockDataService) {
    }

    ngOnInit(): void {
        this.dataSource = (rpd => this.mockDataService.listPersons(rpd.firstResult, rpd.count, rpd.orderBy));
    }

}
