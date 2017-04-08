import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MockDataService, Person} from '../mock-data.service';
import {PageRequestData} from '../component-wrapper/src/app/page-request-data';
import {TableResultsPage} from '../component-wrapper/src/app/table-results-page';
import {TableColumn} from 'app/component-wrapper/src/app/table-column';
import {ActivatedRoute} from '@angular/router';
import {TableComponent} from '../component-wrapper/src/app/table/table.component';

@Component({
    selector: 'app-test-component',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    @ViewChild(TableComponent) table: TableComponent<Person>;
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

    constructor(private mockDataService: MockDataService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.dataSource = (rpd => this.mockDataService.listPersons(rpd.from, rpd.count, rpd.orderBy));
        const currentPage = this.activatedRoute.snapshot.queryParams['currentPage'];

        if (currentPage) {
            this.table.currentPage = Number(currentPage);
        }
    }
}
