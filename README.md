
# NG2 IQ-BOOSTRAP-TABLE
[![InnQUbe](http://www.innqube.com/powered-by-innqube.png)](http://www.innqube.com/)

https://david-dm.org/Innqube/iq-bootstrap-table.svg

[![Dependency Status](https://david-dm.org/Innqube/iq-bootstrap-table.svg)](https://david-dm.org/Innqube/iq-bootstrap-table)
[![devDependency Status](https://david-dm.org/Innqube/iq-bootstrap-table/dev-status.svg)](https://david-dm.org/Innqube/iq-bootstrap-table#info=devDependencies)

Angular 2 table based on bootstrap and webservices paginated requests 

Usage example:

*app.component.html:*

```
<iq-bt-table 
(onLoadData)="loadData($event)" 
        [paginatedResults]="paginatedResults" 
        [headerItems]="headerItems" 
        [pageSize]=5>
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
    import { TableComponent, PaginatedResults, HeaderItem, DataRequestConfig } from 'ng2-iq-bootstraptable';
    @Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.css']
    })
    export class CustomersListComponent implements OnInit {
    private paginatedResults: PaginatedResults<Customer>;
    private drc: DataRequestConfig;
    private headerItems: HeaderItem[] = [
        {
        name: "Código",
        prop: "code"
        }, {
        name: "Nombre",
        prop: "name"
        }, {
        name: "Pseudónimo",
        prop: "pseudonym"
        }, {
        name: "Acciones",
        prop: undefined
        }
    ];
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
    }```
