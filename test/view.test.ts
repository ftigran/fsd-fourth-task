
const sum = require('../src/index/index.ts');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,3)).toBe(3);
});