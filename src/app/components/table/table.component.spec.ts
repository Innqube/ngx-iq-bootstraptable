/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PaginatedResults } from '../paginated-results';
import { FooterLegend } from '../footer/footer-legend';
import { TableFooterComponent } from '../footer/tablefooter.component';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TableComponent, TableFooterComponent],
            imports: [],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        component.paginatedResults = new PaginatedResults<any>();
        component.footerLegend = new FooterLegend();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
