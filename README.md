
# NG2 IQ-BOOTSTRAP-TABLE
[![InnQUbe](http://www.innqube.com/powered-by-innqube.png)](http://www.innqube.com/)

[![Dependency Status](https://david-dm.org/Innqube/iq-bootstrap-table.svg)](https://david-dm.org/Innqube/iq-bootstrap-table)
[![devDependency Status](https://david-dm.org/Innqube/iq-bootstrap-table/dev-status.svg)](https://david-dm.org/Innqube/iq-bootstrap-table#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/Innqube/iq-bootstrap-table/badges/gpa.svg)](https://codeclimate.com/github/Innqube/iq-bootstrap-table)
[![Build Status](https://travis-ci.org/Innqube/iq-bootstrap-table.svg?branch=master)](https://travis-ci.org/Innqube/iq-bootstrap-table)

This table is an Angular 2 component based on Bootstrap3. Is prepared to handle server side requests for filtering, ordering and pagination of results, without needing to write a lot of boilerplate every time you have to add a new table view to your project.

Included sample screenshot:
![Screenshot](http://www.innqube.com/components/iq-bootstrap-table-screen02.png)

Usage example:

*app.component.html:*

```
<ngx-iq-table [dataSource]="dataSource"
              [columns]="columns"
              [pageSize]=5>
        <ng-template #rows let-item="$implicit" let-i="index">
            <tr>
                <td>{{item.id}}</td>
                <td>{{item.firstname}}</td>
                <td>{{item.lastname}}</td>
                <td>{{item.email}}</td>
            </tr>
        </ng-template>
    </ngx-iq-table>
```

*app.component.ts:*

``` 
    import {Component, OnInit} from '@angular/core';
    import {Observable} from 'rxjs/Observable';
    import {MockDataService, Person} from './mock-data.service';
    import {PageRequestData} from './component-wrapper/src/app/page-request-data';
    import {ResultsPage} from './component-wrapper/src/app/results-page';
    import {TableColumn} from 'app/component-wrapper/src/app/table-column';
    
    @Component({
        selector: 'app-customers-list',
        templateUrl: './customers-list.component.html',
        styleUrls: ['./customers-list.component.css']
    })
    export class CustomersListComponent implements OnInit {
        dataSource: (requestPageData: PageRequestData) => Observable<ResultsPage<Person>>;
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
        private footerLegend: FooterLegend = {
            showingResults: 'Mostrando resultados',
            of: 'de',
            to: 'al'
        };
        
        ngOnInit(): void {
            this.dataSource = (rpd => this.mockDataService.listPersons(rpd.firstResult, rpd.count, rpd.orderBy));
        }
    }
