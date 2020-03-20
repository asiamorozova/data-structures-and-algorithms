const {
  map,
  add1
} = require('./array-map.js');


const array = [1, 2, 3];

describe('validator module', () => {
  describe('basic validation', () => {
    it('1 should be added to each number in the array', () => {
      expect(map(array, add1)).toEqual([2, 3, 4]);
      //         expect(isNumber('hi')).toBeFalsy();
      //         expect(isNumber([])).toBeFalsy();
      //         expect(isNumber({})).toBeFalsy();
      //         expect(isNumber(() => {})).toBeFalsy();
      //         expect(isNumber(true)).toBeFalsy();
    });
  });
});
