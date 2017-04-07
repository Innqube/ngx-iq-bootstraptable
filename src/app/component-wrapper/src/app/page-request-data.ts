import {ColumnOrder} from './column-order';

export class PageRequestData {
    from: number;
    count: number;
    orderBy: ColumnOrder[];
}
