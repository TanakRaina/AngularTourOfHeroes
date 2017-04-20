import { AngularTourOfHerosPage } from './app.po';

describe('angular-tour-of-heros App', () => {
  let page: AngularTourOfHerosPage;

  beforeEach(() => {
    page = new AngularTourOfHerosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
