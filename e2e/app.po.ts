import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBody() {
    return element(by.css('app-root body'));
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getButton() {
    return element(by.css('app-root button'));
  }

  getNav() {
    return element(by.css('app-root nav'));
  }

  getNavList() {
    return element(by.css('app-root nav ul'));
  }

  getNavListItems() {
    return element(by.css('app-root nav ul li'));
  }

  getNavListParagraph() {
    return element(by.css('app-root nav p'));
  }

  getNavListParagraphText() {
    return element(by.css('app-root nav p')).getText();
  }

  getFooter() {
    return element(by.css('app-root footer'));
  }

  getButtonText() {
    return element(by.css('app-root button')).getText();
  }

  getToggledClass() {
    return element(by.css('app-root button')).getText();
  }


}
