/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PaginatedResults } from '../paginated-results';
import { FooterLegend } from './footer-legend';

import { TableFooterComponent } from './tablefooter.component';

describe('TableFooterComponent', () => {
  let component: TableFooterComponent;
  let fixture: ComponentFixture<TableFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFooterComponent ],
      imports: [],  
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFooterComponent);    
    component = fixture.componentInstance;
    component.paginatedResults = new PaginatedResults<any>();
    component.footerLegend = new FooterLegend();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
