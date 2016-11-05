import { BookmarksClientPage } from './app.po';

describe('bookmarks-client App', function() {
  let page: BookmarksClientPage;

  beforeEach(() => {
    page = new BookmarksClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
