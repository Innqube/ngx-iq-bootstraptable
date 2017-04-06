import {ColumnOrder} from './column-order';

export class PageRequestData {
    firstResult: number;
    count: number;
    orderBy: ColumnOrder[];
}
