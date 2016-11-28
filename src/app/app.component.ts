import { Component } from '@angular/core';
import { MockDataService, Person } from './mock-data.service';
import { DataRequestConfig } from './components/data-request-config';
import { HeaderItem } from './components/header-item';
import { PaginatedResults } from './components/paginated-results';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  private paginatedResults: PaginatedResults<Person>;
  private pageSize: number;
  private headerItems: HeaderItem[] = [
    {
      name: 'Id',
      prop: 'id'
    }, {
      name: 'First name',
      prop: 'firstname'
    }, {
      name: 'Last name',
      prop: 'lastname'
    }, {
      name: 'E-Mail',
      prop: 'email'
    }
  ];

  constructor(
    private mockDataService: MockDataService
  ) {}

  loadData(drc: DataRequestConfig) {
    this
      .mockDataService
      .listPersons(drc.firstResult, drc.count, drc.orderBy[0].property, drc.orderBy[0].direction)
      .subscribe((paginatedResults: PaginatedResults<Person>) => this.paginatedResults = paginatedResults);
  }
}
