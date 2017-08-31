import { AppPage } from './app.po';



describe('AppPage Button Behavior', function() {
    let page: AppPage;

    beforeEach(() => {
      page = new AppPage();
    });

   it('should change the button color after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getButtonBackgroundColor()).toBe('rgba(216, 17, 89, 1)');
  });

   it('should change the title color after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getTitleColor()).toBe('rgba(216, 17, 89, 1)');
  });

   it('should change the footer icon background color', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getTitleColor()).toBe('rgba(216, 17, 89, 1)');
  });

   it('body should contain class "nineties" after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getBody()).toMatch('nineties');

  });

   it('body should not contain class "nineties" after two clicks', () => {
    page.navigateTo();
    page.getButton().click();
    page.getButton().click();

    expect(page.getBody()).not.toMatch('nineties');
  });

   it('should change the nav bar background after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getNavBackground()).toBe('rgba(216, 17, 89, 1)');
  });

   it('should change the footer background after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getFooterIconBackground()).toBe('rgba(51, 56, 59, 1)');
  });


  it('should change the nav bar color after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getNavColor()).toBe('rgba(0, 0, 0, 1)');
  });

   it('should change the homepage background after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getPageBackground()).toBe('rgba(0, 0, 0, 0) url("https://media.giphy.com/media/87tkMovdHMRk4/giphy.gif") repeat scroll 0% 0% / auto padding-box border-box');
  });

   it('should change the font-family after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getPageBackground()).toBe('rgba(0, 0, 0, 0) url("https://media.giphy.com/media/87tkMovdHMRk4/giphy.gif") repeat scroll 0% 0% / auto padding-box border-box');
  });

});
