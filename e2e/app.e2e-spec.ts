import { AppPage } from './app.po';

describe('nineties-theme-test-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});


describe('toggle style button', () => {
	it("it toggles the 'nineties' class", function() {
	      $('.identity').click();
	      expect(element.attr('class')).toEqual('nineties');
	});  
});