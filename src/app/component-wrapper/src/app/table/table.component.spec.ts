/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {FooterLegend} from '../footer/footer-legend';
import {FooterComponent} from '../footer/footer.component';
import {TableComponent} from './table.component';
import {MockDataService} from '../../../../mock-data.service';
import {TableStateService} from '../table-state.service';
import {Observable} from 'rxjs/Observable';
import {PageRequestData} from '../page-request-data';

class Person {
    firstname: string;
    lastname: string;
}

class TableStateServiceMock {

    state = [];

    constructor() {
        this.state['tableId'] = {
            currentPage: 2,
            ordering: []
        };
    }
}

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TableComponent, FooterComponent],
            imports: [],
            providers: [
                MockDataService,
                {
                    provide: TableStateService,
                    useClass: TableStateServiceMock
                }
            ]
        }).compileComponents();
    }));

    beforeEach(inject([MockDataService], (mockDataService) => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        component.columns = [{
            name: 'First name',
            prop: 'firstname',
            css: 'text-right',
            width: 50,
            widthUnit: '%'
        },
            {
                name: 'Last name',
                prop: 'lastname',
                width: 50,
                widthUnit: '%'
            }];
        component.resultsPage = {
            from: 0,
            count: 2,
            total: 5,
            results: [{
                'firstname': 'Jennifer',
                'lastname': 'Fields'
            }, {
                'firstname': 'Jeffrey',
                'lastname': 'Johnston'
            }, {
                'firstname': 'Alice',
                'lastname': 'Johnson'
            }, {
                'firstname': 'Debra',
                'lastname': 'Fox'
            }, {
                'firstname': 'Judy',
                'lastname': 'Graham'
            }]
        };
        component.footerLegend = new FooterLegend();
        component.dataSource = (rpd => mockDataService.listPersons(rpd.from, rpd.count, rpd.orderBy));
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render header', () => {
        const element = fixture.debugElement.nativeElement;
        const headers = element.querySelectorAll('a');
        expect(headers[0].text.trim()).toBe('First name');
        expect(headers[1].text.trim()).toBe('Last name');
    });

    it('sort should trigger data load', () => {
        spyOn(component, 'dataSource').and.returnValue(Observable.empty());
        component.sort('firstname');
        expect(component.dataSource).toHaveBeenCalled();
    });

    it('refreshData should trigger data load', () => {
        spyOn(component, 'dataSource').and.returnValue(Observable.empty());
        component.refreshData();
        expect(component.dataSource).toHaveBeenCalled();
    });

    it('should sort ascendant on the first click', () => {
        component.sort('firstname');
        expect(component.getSortDirection({
            name: 'First name',
            prop: 'firstname',
            width: 50,
            widthUnit: '%'
        })).toBe('asc');
    });

    it('should sort descendant on the second click', () => {
        component.sort('firstname');
        component.sort('firstname');
        expect(component.getSortDirection({
            name: 'First name',
            prop: 'firstname',
            width: 50,
            widthUnit: '%'
        })).toBe('desc');
    });

    it('should add sorting columns', () => {
        component.pageSize = 10;
        fixture.detectChanges();
        spyOn(component, 'dataSource').and.returnValue(Observable.empty());
        component.sort('firstname');
        component.sort('lastname');
        const prd = new PageRequestData();
        prd.from = 0;
        prd.count = 10;
        prd.orderBy = [{
            property: 'lastname',
            direction: 'asc'
        },
            {
                property: 'firstname',
                direction: 'asc'
            }
        ];
        expect(component.dataSource).toHaveBeenCalledWith(prd);
    });

    it('should add sorting columns at the beggining', () => {
        component.pageSize = 10;
        fixture.detectChanges();
        spyOn(component, 'dataSource').and.returnValue(Observable.empty());
        component.sort('firstname');
        component.sort('lastname');
        component.sort('firstname');
        const prd = new PageRequestData();
        prd.from = 0;
        prd.count = 10;
        prd.orderBy = [
            {
                property: 'firstname',
                direction: 'desc'
            },
            {
                property: 'lastname',
                direction: 'asc'
            }
        ];
        expect(component.dataSource).toHaveBeenCalledWith(prd);
    });

    it('should update current page onPageClicked', () => {
        component.onPageClicked(2);
        expect(component.currentPage).toBe(2);
    });

    it('should call dataSource onPageClicked', () => {
        spyOn(component, 'dataSource').and.returnValue(Observable.empty());
        component.onPageClicked(2);
        expect(component.dataSource).toHaveBeenCalled();
    });

    it('should save state when id is set', () => {
        component.tableId = 'tableId';
        fixture.detectChanges();
        spyOn(component, 'saveState');
        component.onPageClicked(2);
        expect(component.saveState).toHaveBeenCalled();
    });

    it('should load state', () => {
        component.tableId = 'tableId';
        fixture.detectChanges();
        spyOn(component, 'loadState');
        component.ngOnInit();
        expect(component.loadState).toHaveBeenCalled();
    });

    it('should add css classes to header', () => {
        const element = fixture.debugElement.nativeElement;
        const headers = element.querySelectorAll('th');
        expect(headers[0].className).toBe('text-right');
    });

});
