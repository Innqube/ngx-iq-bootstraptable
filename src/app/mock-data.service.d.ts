import { Observable } from 'rxjs/Observable';
export declare class Person {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}
export declare class MockDataService {
    private persons;
    constructor();
    listPersons(from: number, count: number, sort: string, order: string): Observable<Person[]>;
}
