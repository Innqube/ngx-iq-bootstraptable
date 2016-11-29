
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
<iq-bt-table 
(onLoadData)="loadData($event)" 
        [paginatedResults]="paginatedResults" 
        [columns]="columns" 
        [pageSize]=5
        [footerLegend]="footerLegend">
    <template #rows let-item="$implicit" let-i="index">
        <tr>
            <td>{{item.code}}</td>
            <td>{{item.name}}</td>
            <td>{{item.pseudonym}}</td>
            <td>
            <a>
                <i class="glyphicon glyphicon-pencil"></i>
            </a>
            </td>
        </tr>
    </template>
</iq-bt-table>
```

*app.component.ts:*

``` 
    import { TableComponent, PaginatedResults, BootstrapTableColumn, DataRequestConfig } from 'ng2-iq-bootstraptable';
    @Component({
        selector: 'app-customers-list',
        templateUrl: './customers-list.component.html',
        styleUrls: ['./customers-list.component.css']
    })
    export class CustomersListComponent implements OnInit {
        private paginatedResults: PaginatedResults<Customer>;
        private drc: DataRequestConfig;
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
            to: 'al'
        };
        loadData(drc: DataRequestConfig) {
            this.drc = drc;
            let from = drc.firstResult;
            let sort = drc.orderBy === undefined ? null : drc.orderBy[0].property;
            let sortDir = drc.orderBy === undefined ? null : drc.orderBy[0].direction;
            this.customerService
                .listCustomers(from, drc.count, sort, sortDir)
                .subscribe((paginatedData) => {
                    this.paginatedResults = paginatedData;
                });
        }
    }
