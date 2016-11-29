import { MockDataService } from './mock-data.service';
import { DataRequestConfig } from './components/data-request-config';
import '../style/app.scss';
export declare class AppComponent {
    private mockDataService;
    private paginatedResults;
    private pageSize;
    private columns;
    private footerLegend;
    constructor(mockDataService: MockDataService);
    loadData(drc: DataRequestConfig): void;
}
