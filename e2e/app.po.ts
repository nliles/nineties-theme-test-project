import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getBody() {
    return element(by.tagName("body")).getAttribute('class');
  }

  getButton() {
    return element(by.css('app-root button'));
  }

  getButtonBackgroundColor() {
    return element(by.css('app-root button')).getCssValue('background-color');
  }

  getTitleColor() {
    return element(by.css('app-root .display-3')).getCssValue('background-color');
  }

  getPageBackgroundColor() {
    return element(by.css('app-root .business-header')).getCssValue('background-color');
  }

  getPageBackground() {
    return element(by.css('app-root .business-header')).getCssValue('background');
  }

  getNavColor() {
    return element(by.css('app-root nav')).getCssValue('color');
  }

  getNavBackground() {
    return element(by.css('app-root nav')).getCssValue('background-color');
  }

  getFooterIconBackground() {
    return element(by.css('app-root .footer-icons a')).getCssValue('background-color');
  }

  getFooterBackground() {
    return element(by.css('app-root .footer-distributed')).getCssValue('background-color');
  }

  getFontFamily() {
    return element(by.tagName("body")).getCssValue('font-family');
  }


}
