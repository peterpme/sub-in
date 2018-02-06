const subIn = require('./subIn');

it('should default export be a function', () => {
  expect(subIn()).toBeDefined();
});

it('should sub in variables from an array', () => {
  const str = 'Hey $0';
  const args = ['Zack'];

  const result = subIn(str, args);
  expect(result).toBe('Hey Zack');
});
