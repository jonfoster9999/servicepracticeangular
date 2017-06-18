import { ServicepracticePage } from './app.po';

describe('servicepractice App', () => {
  let page: ServicepracticePage;

  beforeEach(() => {
    page = new ServicepracticePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
