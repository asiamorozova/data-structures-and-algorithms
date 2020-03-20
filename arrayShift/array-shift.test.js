const { insertShiftArray } = require('./array-shift.js'); 

describe('added value', () => {
  it('returns new value in the middle of index', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);

  });
});
