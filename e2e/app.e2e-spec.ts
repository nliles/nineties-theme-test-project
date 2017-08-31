import { AppPage } from './app.po';


describe('AppPage Button Behavior', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should add class "nineties" to the body after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getBody()).toMatch('nineties');
  });

  it('should remove class "nineties" after two clicks', () => {
    page.navigateTo();
    page.getButton().click();
    page.getButton().click();
    expect(page.getBody()).not.toMatch('nineties');
  });

  it('should change the font family after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getFont()).toBe('"Comic Sans MS", cursive');
  });

  it('should change the homepage background after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getPageBackground()).toBe('rgba(0, 0, 0, 0) url("https://media.giphy.com/media/87tkMovdHMRk4/giphy.gif") repeat scroll 0% 0% / auto padding-box border-box');
  });

  it('should change the title color after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getTitleColor()).toBe('rgba(216, 17, 89, 1)');
  });
   
  it('should change the button color after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getButtonBackgroundColor()).toBe('rgba(216, 17, 89, 1)');
  });

  it('should change the button border after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getButtonBorder()).toBe('5px outset rgb(128, 128, 128)');
  });

  it('should change the nav bar background color after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getNavBackground()).toBe('rgba(216, 17, 89, 1)');
  });

   it('should change the bottom border of the nav bar after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getNavBorder()).toBe('3px solid rgb(255, 255, 255)');
  });
   
  it('should change the nav bar font color after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getNavColor()).toBe('rgba(0, 0, 0, 1)');
  });

  it('should change the footer background color after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getFooterBackground()).toBe('rgba(216, 17, 89, 1)');
  });

  it('should change the top border of the footer after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getFooterBorder()).toBe('3px solid rgb(255, 255, 255)');
  });

  it('should change the background color of the center footer icons after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getFooterCenterIconBackground()).toEqual([ 'rgba(51, 56, 59, 1)', 'rgba(51, 56, 59, 1)', 'rgba(51, 56, 59, 1)' ]);
  });

  it('should change the background color of the social media footer icons after click', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getFooterSocialIconBackground()).toEqual([ 'rgba(51, 56, 59, 1)', 'rgba(51, 56, 59, 1)', 'rgba(51, 56, 59, 1)', 'rgba(51, 56, 59, 1)' ]);
  });

});
