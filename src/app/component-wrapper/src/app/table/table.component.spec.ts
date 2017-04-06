/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FooterLegend} from '../footer/footer-legend';
import {FooterComponent} from '../footer/footer.component';
import {TableComponent} from './table.component';

class Person {
    firstname: string;
    lastname: string;
}

describe('TableComponent', () => {
    let component: TableComponent<any>;
    let fixture: ComponentFixture<TableComponent<any>>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TableComponent, FooterComponent],
            imports: [],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        component.columns = [{
            name: 'First name',
            prop: 'firstname',
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
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render header', () => {
        const element = fixture.debugElement.nativeElement;
        const headers = element.querySelectorAll('a');
        expect(headers[0].text).toBe('First name');
        expect(headers[1].text).toContain('Last name');
    });

});
