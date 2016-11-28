import { MockDataService } from './mock-data.service';
import { DataRequestConfig } from './components/data-request-config';
import '../style/app.scss';
export declare class AppComponent {
    private mockDataService;
    private paginatedResults;
    private headerItems;
    constructor(mockDataService: MockDataService);
    loadData(drc: DataRequestConfig): void;
}
