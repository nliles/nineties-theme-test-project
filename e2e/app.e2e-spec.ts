import { AppPage } from './app.po';

describe('AppPage Header Content', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a nav bar that contains a list of two items', () => {
    page.navigateTo();
    expect(page.getNavListItems().count()).toBe(2);
  });


  it('should have a nav bar that contains a paragraph element with text', () => {
    page.navigateTo();
    expect(page.getNavListParagraphText()).toEqual('Contact');
  });

});

describe('AppPage HomePage Content', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

   it('should have a button with text "Toggle Style"', () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('Toggle Style');
  });

  it('should display a title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Lorem Ipsum Dolor');
  });

  it('should have a background-color', () => {
    page.navigateTo();
    expect(page.getPageBackgroundColor()).toEqual('rgba(237, 237, 237, 1)');
  });


});


describe('AppPage Footer Content', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a footer with a background-color', () => {
    page.navigateTo();
    expect(page.getFooterBackground()).toEqual('rgba(41, 44, 47, 1)');
  });

  it('should have a footer with three links', () => {
    page.navigateTo();
    expect(page.getFooterLinks().count()).toBe(3);
  });

  it('should have three social media icon links', () => {
    page.navigateTo();
    expect(page.getFooterIcons().count()).toBe(4);
  });

  it('should have a phone number', () => {
    page.navigateTo();
    expect(page.getFooterPhoneNumber()).toEqual('123-456-7890');
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
    expect(page.getToggledNavClass()).not.toMatch('nineties');
    expect(page.getToggledFooterClass()).not.toMatch('nineties');
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

   it('should change the homepage background after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getPageBackground()).toBe('rgba(0, 0, 0, 0) url("https://media.giphy.com/media/87tkMovdHMRk4/giphy.gif") repeat scroll 0% 0% / auto padding-box border-box');
  }); 

});