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

  getFont() {
    return element(by.tagName("body")).getCssValue('font-family');
  }

  getButtonBackgroundColor() {
    return element(by.css('app-root button')).getCssValue('background-color');
  }

  getTitleColor() {
    return element(by.css('app-root h1')).getCssValue('color');
  }

  getPageBackgroundColor() {
    return element(by.tagName("body")).getCssValue('background-color');
  }

  getPageBackground() {
    return element(by.tagName("body")).getCssValue('background');
  }

  getNavColor() {
    return element(by.css('app-root nav')).getCssValue('color');
  }

  getNavBackground() {
    return element(by.css('app-root nav')).getCssValue('background-color');
  }

  getNavBorder() {
    return element(by.css('app-root nav')).getCssValue('border-bottom');
  }

  getFooterBorder() {
    return element(by.css('app-root footer')).getCssValue('border-top');
  }

  getButtonBorder() {
    return element(by.css('app-root button')).getCssValue('border');
  }

  getFooterBackground() {
    return element(by.css('app-root footer')).getCssValue('background-color');
  }

  getFooterCenterIconBackground() {
    return element.all(by.css('app-root .footer-distributed .footer-center i')).getCssValue('background-color');
  }

  getFooterSocialIconBackground() {
    return element.all(by.css('app-root .footer-icons a')).getCssValue('background-color');
  }

  getFontFamily() {
    return element(by.tagName("body")).getCssValue('font-family');
  }


}
