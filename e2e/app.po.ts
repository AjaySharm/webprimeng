export class WebPrimengPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('web-primeng-app h1')).getText();
  }
}
