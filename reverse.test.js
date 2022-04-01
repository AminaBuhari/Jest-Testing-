const reverseString = require('./reverse');

test('reverse hello should be olleh', () => {
  expect(reverseString("hello")).toBe("olleh");
});
