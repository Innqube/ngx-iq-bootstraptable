import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestComponent} from './test.component';
import {NgxIqTableModule} from '../component-wrapper/src/app/ngx-iq-table.module';
import {RouterTestingModule} from '@angular/router/testing';
import {MockDataService} from '../mock-data.service';

describe('TestComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [NgxIqTableModule, RouterTestingModule],
            providers: [MockDataService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
