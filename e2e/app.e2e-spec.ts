import { A2pgAppPage } from './app.po';

describe('a2pg-app App', () => {
  let page: A2pgAppPage;

  beforeEach(() => {
    page = new A2pgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
