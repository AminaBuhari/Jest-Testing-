const capitalizeString = require("./capitalize");

test('capitalize string', () => {
    let catName = 'lucy'
    expect(capitalizeString(catName)).toBe('Lucy');
  });