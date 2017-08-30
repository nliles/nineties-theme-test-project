import { AppPage } from './app.po';

describe('AppPage Content', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

   it('should have a button', () => {
    page.navigateTo();
    expect(page.getButton()).toBeTruthy();
  });

   it('should have a button with text', () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('Toggle Style');
  });

   it('should have a nav bar', () => {
    page.navigateTo();
    expect(page.getNav()).toBeTruthy();
  });

   it('should have a nav bar that contains a list', () => {
    page.navigateTo();
    expect(page.getNavList()).toBeTruthy();
  });

  it('should have a nav bar that contains a list with items', () => {
    page.navigateTo();
    expect(page.getNavListItems()).toBeTruthy();
  });

  it('should have a nav bar that contains a paragraph element', () => {
    page.navigateTo();
    expect(page.getNavListParagraph()).toBeTruthy();
  });

  it('should have a nav bar that contains a paragraph element with text', () => {
    page.navigateTo();
    expect(page.getNavListParagraphText()).toEqual('Contact');
  });

   it('should have a footer', () => {
    page.navigateTo();
    expect(page.getNav()).toBeTruthy();
  });

  it('should display a title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Lorem Ipsum Dolor');
  });


});

describe('homepage toggle style button', function() {
    let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
    });

   it('should display class "nineties" after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getBody()).hasClass('nineties');
  });   

});