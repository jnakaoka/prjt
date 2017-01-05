import { PrjtPage } from './app.po';

describe('prjt App', function() {
  let page: PrjtPage;

  beforeEach(() => {
    page = new PrjtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
