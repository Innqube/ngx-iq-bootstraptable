export declare class PaginatedResults<T> {
    cursor: number;
    pageSize: number;
    count: number;
    results: T[];
    constructor();
}
