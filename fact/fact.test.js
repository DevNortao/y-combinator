const fact = require('./fact');

describe('Factorial function', () => {
  it('should return 1 when input is 1', () => {
      expect(fact(1)).toBe(1);
    });
});
