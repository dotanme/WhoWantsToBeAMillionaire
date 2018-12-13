import { DecodeHtmlStringPipe } from './decode-html-string.pipe';

describe('DecodeHtmlStringPipe', () => {
  it('create an instance', () => {
    const pipe = new DecodeHtmlStringPipe();
    expect(pipe).toBeTruthy();
  });
});
