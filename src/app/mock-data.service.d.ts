import { Observable } from 'rxjs/Rx';
import { PaginatedResults } from './components/paginated-results';
export declare class Person {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}
export declare class MockDataService {
    private persons;
    constructor();
    listPersons(from: number, count: number, sort: string, order: string): Observable<PaginatedResults<Person>>;
}
