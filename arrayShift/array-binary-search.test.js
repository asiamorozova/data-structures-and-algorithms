


const { BinarySearch } = require('../array-binary-search.js'); 

describe('is key exists', () => {
  it('returns index number of key', () => {
    expect(BinarySearch([2, 4, 6, 8], 8)).toEqual(3);

  });
});
