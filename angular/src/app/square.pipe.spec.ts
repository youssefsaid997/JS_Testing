import { SquarePipe } from './square.pipe';

describe('SquarePipe', () => {
  const pipe = new SquarePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('test if number is passed return number * number', () => {
    expect(pipe.transform(4)).toBe(16);
  });
});
