import { UiClockPage } from './app.po';

describe('ui-clock App', function() {
  let page: UiClockPage;

  beforeEach(() => {
    page = new UiClockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
