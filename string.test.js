const stringLength = require('./string');

test('check string length', () => {
    let string = "now";
    expect(stringLength(string)).not.toBe(string.length < 1 && string.length > 10);
  });
