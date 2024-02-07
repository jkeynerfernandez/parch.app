const {sum, restar} = require('./myTest.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(restar(5, 2)).toBe(3);
});