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
      declarations: [TableFooterComponent],
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

  it('paginator should render', () => {
    component.paginatedResults.count = 5;
    component.paginatedResults.pageSize = 4;    
    fixture.detectChanges();
    let element = fixture.nativeElement;
    expect(component.getTotalPages()).toBe(2);
    expect(element.querySelectorAll('.pagination').length).toBe(1);
  });

  it('paginator should not render', () => {
    component.paginatedResults.count = 5;
    component.paginatedResults.pageSize = 5;
    fixture.detectChanges();
    let element = fixture.nativeElement;
    expect(element.querySelectorAll('.pagination').length).toBe(0);
  });

  it('paginator should have two pages', () => {
    component.paginatedResults.count = 5;
    component.paginatedResults.pageSize = 4;
    let element = fixture.nativeElement;
    expect(component.getTotalPages()).toBe(2);
  });

  it('current page should begin at', () => {
    component.paginatedResults.count = 100;
    component.paginatedResults.pageSize = 5;
    component.paginatedResults.cursor = 0;
    let element = fixture.nativeElement;
    expect(component.getPageBeginning()).toBe(1);
  });

  it('current page should end at', () => {
    component.paginatedResults.count = 100;
    component.paginatedResults.pageSize = 5;
    component.paginatedResults.cursor = 0;
    let element = fixture.nativeElement;
    expect(component.getPageEnd()).toBe(5);
  });
});
