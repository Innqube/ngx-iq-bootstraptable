import {Injectable} from '@angular/core';
import {TableState} from './table-state';

@Injectable()
export class PaginationService {

    state: TableState[] = [];

}
