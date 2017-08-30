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

   it('should have a button with text "Toggle Style"', () => {
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

describe('AppPage button behavior', function() {
    let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
    });

   it('should display class "nineties" after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getToggledNavClass()).toMatch('nineties');
    expect(page.getToggledFooterClass()).toMatch('nineties');
  });   

   it('should not display class "nineties" after two clicks', () => {
    page.navigateTo();
    page.getButton().click();
    page.getButton().click();
    expect(page.getToggledNavClass()).toMatch('');
    expect(page.getToggledFooterClass()).toMatch('');
  });   

   it('should change the nav bar background after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getNavBackground()).toBe('rgba(216, 17, 89, 1)');
  });  

  it('should change the nav bar color after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getNavColor()).toBe('rgba(0, 0, 0, 1)');
  });  

   it('should change the footer background after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getFooterBackground()).toBe('rgba(216, 17, 89, 1)');
  }); 

});