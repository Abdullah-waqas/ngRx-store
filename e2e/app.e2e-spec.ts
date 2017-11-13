import { NgxStorePage } from './app.po';

describe('ngx-store App', () => {
  let page: NgxStorePage;

  beforeEach(() => {
    page = new NgxStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
