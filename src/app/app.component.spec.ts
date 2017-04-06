import {async, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {NgxIqTableModule} from './component-wrapper/src/app/ngx-iq-table.module';
import {MockDataService} from './mock-data.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                NgxIqTableModule
            ],
            providers: [
                MockDataService
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
