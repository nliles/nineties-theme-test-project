import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getBody() {
    return element(by.tagName("body")).getAttribute('class');
  }
  
  getButton() {
    return element(by.css('app-root button'));
  }

  getButtonText() {
    return element(by.css('app-root button')).getText();
  }

  getPageBackgroundColor() {
    return element(by.css('app-root .business-header')).getCssValue('background-color');
  }

  getPageBackground() {
    return element(by.css('app-root .business-header')).getCssValue('background');
  }

  getToggledPageClass() {
    return element(by.css('.business-header')).getAttribute('class');
  }

  getNavListItems() {
    return element.all(by.css('app-root nav ul li'));
  }

  getNavListParagraphText() {
    return element(by.css('app-root nav p')).getText();
  }

  getToggledNavClass() {
    return element(by.css('app-root nav')).getAttribute('class');
  }

  getNavColor() {
    return element(by.css('app-root nav')).getCssValue('color');
  }

  getNavBackground() {
    return element(by.css('app-root nav')).getCssValue('background-color');
  }

  getToggledFooterClass() {
    return element(by.css('app-root footer')).getAttribute('class');
  }

  getFooterLinks() {
    return element.all(by.css('.footer-links a'));
  }

  getFooterIcons() {
    return element.all(by.css('.footer-icons a'));
  }

  getFooterPhoneNumber() {
    return element.all(by.css('.footer-center div')).get(1).getText();
  }

  getFooterBackground() {
    return element(by.css('app-root .footer-distributed')).getCssValue('background-color');
  }


}
