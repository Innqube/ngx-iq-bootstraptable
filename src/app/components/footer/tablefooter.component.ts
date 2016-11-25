import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginatedResults } from '../paginated-results';

const PAGES_LIMIT = 6;

@Component({
  selector: 'iq-bt-footer',
  templateUrl: './tablefooter.component.html',
  styleUrls: ['./tablefooter.component.css']
})
export class TableFooterComponent implements OnInit {

  @Input() paginatedResults: PaginatedResults<any>;
  @Output() onPageClicked: EventEmitter<number> = new EventEmitter<number>();
  private currentPage = 0;

  constructor() { }

  ngOnInit() {
  }

  getPageBeginning(): number {
    return this.paginatedResults.cursor + 1;
  }

  getPageEnd(): number {
    return Math.min(this.paginatedResults.cursor + this.paginatedResults.pageSize, this.paginatedResults.count);
  }

  getTotal(): number {
    return this.paginatedResults.count;
  }

  getPages(): number[] {
    let pages: number[] = [];
    let radio: number = PAGES_LIMIT / 2;
    let currentPage: number = this.currentPage; // this.getCurrentPage();
    let totalPages: number = this.getTotalPages();
    let firstPage: number;
    let lastPage: number;

    if (totalPages - currentPage <= radio) {
      firstPage = Math.max(0, totalPages - PAGES_LIMIT);
      lastPage = totalPages;
    } else if (currentPage <= radio) {
      firstPage = 0;
      lastPage = Math.min(totalPages, PAGES_LIMIT);
    } else {
      firstPage = currentPage - radio;
      lastPage = currentPage + radio;
    }

    for (let i = firstPage; i < lastPage; i++) {
      pages.push(i + 1);
    }

    return pages;
  }

  getTotalPages() {
    return Math.ceil((this.getTotal() / this.paginatedResults.pageSize));
  }

  isPreviousPageVisible(): boolean {
    let currentPage = this.getCurrentPage();
    return currentPage > PAGES_LIMIT / 2 && this.getTotalPages() > PAGES_LIMIT;
  }

  isNextPageVisible(): boolean {
    let totalPages = this.getTotalPages();
    return totalPages - this.currentPage > PAGES_LIMIT / 2 && totalPages > PAGES_LIMIT;
  }

  pageClicked(page: number) {
    this.currentPage = page - 1;
    this.onPageClicked.emit(page - 1);
  }

  onPreviousClicked() {
    this.currentPage--;
    this.onPageClicked.emit(0);
  }

  onNextClicked() {
    this.currentPage++;
    this.onPageClicked.emit(this.currentPage);
  }

  getCurrentPage() {
    return this.currentPage;
  }

}
