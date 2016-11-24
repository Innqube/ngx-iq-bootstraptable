/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PaginatedResults } from '../paginated-results';
import { DataRequestConfig } from '../data-request-config';
import { HeaderItem } from '../header-item';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent, PaginatedResults ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.paginatedResults = new PaginatedResults<any>();
    component.headerItems = [];
    component.pageSize = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
