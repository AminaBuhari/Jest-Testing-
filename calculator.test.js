const calculator = require('./calculator');
describe('calculator', () => {
    describe('add a number', () => {
      test('returns the correct addition', () => {
        expect(calculator.add(2,4)).toBe(6);
      });
    });

    describe('divide the number', () => {
        test('returns the correct division', () => {
          expect(calculator.divide(6,3)).toBe(2);
        });
    });

    describe('multiply the number', () => {
        test('returns the correct multiplication', () => {
          expect(calculator.multiplyNumbers(4,3)).toBe(12);
        });
    });
});