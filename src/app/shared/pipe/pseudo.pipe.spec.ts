import { PseudoPipe } from './pseudo.pipe';

describe('PseudoPipe', () => {
  it('create an instance', () => {
    const pipe = new PseudoPipe();
    expect(pipe).toBeTruthy();
  });
});
