import { WebPrimengPage } from './app.po';

describe('web-primeng App', function() {
  let page: WebPrimengPage;

  beforeEach(() => {
    page = new WebPrimengPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('web-primeng works!');
  });
});
