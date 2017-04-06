import { NgxBootstrapTablePage } from './app.po';

describe('ngx-bootstrap-table App', () => {
  let page: NgxBootstrapTablePage;

  beforeEach(() => {
    page = new NgxBootstrapTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
