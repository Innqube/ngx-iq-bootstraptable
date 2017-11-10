/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FooterLegend} from './footer-legend';

import {FooterComponent} from './footer.component';
import {TableResultsPage} from '../table-results-page';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            imports: [],
            providers: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        component.resultsPage = new TableResultsPage();
        component.footerLegend = new FooterLegend();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('paginator should render', () => {
        component.resultsPage.total = 5;
        component.resultsPage.count = 4;
        fixture.detectChanges();
        const element = fixture.nativeElement;
        expect(component.getTotalPages()).toBe(2);
        expect(element.querySelectorAll('.pagination').length).toBe(1);
    });

    it('paginator should not render', () => {
        component.resultsPage.total = 5;
        component.resultsPage.count = 5;
        fixture.detectChanges();
        const element = fixture.nativeElement;
        expect(element.querySelectorAll('.pagination').length).toBe(0);
    });

    it('paginator should have two pages', () => {
        component.resultsPage.total = 5;
        component.resultsPage.count = 4;
        expect(component.getTotalPages()).toBe(2);
    });

    it('current page should begin at', () => {
        component.resultsPage.total = 100;
        component.resultsPage.count = 5;
        component.resultsPage.from = 0;
        expect(component.getPageBeginning()).toBe(1);
    });

    it('current page should end at', () => {
        component.resultsPage.total = 100;
        component.resultsPage.count = 5;
        component.resultsPage.from = 0;
        expect(component.getPageEnd()).toBe(5);
    });

    it('should emit event on page clicked', () => {
        spyOn(component.onPageClicked, 'emit');
        component.pageClicked(1);
        fixture.detectChanges();
        expect(component.onPageClicked.emit).toHaveBeenCalledWith(0);
    });

    it('should emit event on first clicked', () => {
        spyOn(component.onPageClicked, 'emit');
        component.onFirstClicked();
        fixture.detectChanges();
        expect(component.onPageClicked.emit).toHaveBeenCalledWith(0);
    });

    it('should emit event on last clicked', () => {
        spyOn(component.onPageClicked, 'emit');
        component.resultsPage.total = 100;
        component.resultsPage.count = 5;
        component.onLastClicked();
        fixture.detectChanges();
        expect(component.onPageClicked.emit).toHaveBeenCalledWith(19);
    });
});
