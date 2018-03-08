import { GrapesPage } from './app.po';

describe('grapes App', () => {
  let page: GrapesPage;

  beforeEach(() => {
    page = new GrapesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
