const { calculateDivisors, tillAddition, updateRemoteStudents, getTweetData, dnaPairs } = require('../javascript_katas.js');

describe('calculateDivisors()', () => {
  test('returns 0 if 3 or below', () => {
    expect(calculateDivisors(0)).toBe(0);
    expect(calculateDivisors(1)).toBe(0);
  });
  test('returns sum of multiples of 3 and 5 below given number', () => {
    expect(calculateDivisors(5)).toBe(3);
    expect(calculateDivisors(7)).toBe(14);
    expect(calculateDivisors(10)).toBe(23);
    expect(calculateDivisors(12)).toBe(33);
  });
});

describe('tillAddition()', () => {
  test('returns £0.00 if empty object', () => {
    expect(tillAddition({})).toBe('£0.00');
  });
  test('returns total in pounds with one each of type', () => {
    expect(tillAddition({ "1p": 1, "2p": 1 })).toBe("£0.03");
    expect(tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 })).toBe("£0.38");
    expect(tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })).toBe("£1.85");
  });
  test('returns total in pounds with types having multiple', () => {
    expect(tillAddition({ "1p": 2, "2p": 1 })).toBe("£0.04");
    expect(tillAddition({ "1p": 7, "2p": 1, "5p": 2, "10p": 3, "20p": 1 })).toBe("£0.69");
    expect(tillAddition({ "5p": 0, "10p": 1, "50p": 2, "£1": 1 })).toBe("£2.10");
  });
});

describe('updateRemoteStudents()', () => {
  test('updates an array of one object with no location', () => {
      expect(updateRemoteStudents([{ name: 'Euler', age: 27 }])).toEqual([{ name: 'Euler', age: 27, location: 'remote' }]);
  });
  test('updates an array of objects, some with no location', () => {
      expect(updateRemoteStudents([
          { name: 'Hypatia', age: 31, location: 'leeds' },
          { name: 'Ramanujan', age: 22 },
          { name: 'Tao', age: 47, location: 'manchester' }
        ])).toEqual([
          { name: 'Hypatia', age: 31, location: 'leeds' },
          { name: 'Ramanujan', age: 22, location: 'remote' },
          { name: 'Tao', age: 47, location: 'manchester' }
        ]);
  });
  test('does not change original array', () => {
      const input = [{ name: 'Euler', age: 27 }];
      expect(updateRemoteStudents(input)).not.toBe(input);
  });
  test('does not change original objects', () => {
      const input = [{ name: 'Euler', age: 27 }];
      expect(updateRemoteStudents(input)[0]).not.toBe(input[0]);
  });
});

describe('getTweetData()', () => {
  test('returns an object from tweet that has no tags or mentions', () => {
    expect(getTweetData("My awesome tweet")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 });
  });
  test('returns an object from tweet that has one tag and no mentions', () => {
    expect(getTweetData("My awesome tweet about #coding")).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 })
  });
  test('returns an object from tweet that has no tags and one mention', () => {
    expect(getTweetData("My awesome tweet to @mention")).toEqual({ tags: [], mentions: ['@mention'], tagCount: 0, mentionCount: 1, length: 28 });
  });
  test('returns an object from tweet that has one tag and one mention', () => {
    expect(getTweetData("My awesome tweet about #coding to @mention")).toEqual(
        { tags: ['#coding'], mentions: ['@mention'], tagCount: 1, mentionCount: 1, length: 42 }
    );
  });
  test('returns an object from tweet that has multiple tags and mentions uniquely stored', () => {
    expect(getTweetData("I am #coding with @mention I love #coding and @mention")).toEqual(
        { tags: ['#coding'], mentions: ['@mention'], tagCount: 1, mentionCount: 1, length: 54 }
    );
  });
});

describe('dnaPairs()', () => {
  test('returns an array of a single array from one base', () => {
    expect(dnaPairs('G')).toEqual([ ["G", "C"] ]);
  });
  test('returns an array of arrays from multiple bases', () => {
    expect(dnaPairs('AG')).toEqual([ [ 'A', 'T' ], [ 'G', 'C' ] ]);
    expect(dnaPairs('ATAG')).toEqual([ [ 'A', 'T' ], [ 'T', 'A' ], [ 'A', 'T' ], [ 'G', 'C' ] ]);
  });
  test('ignores other characters', () => {
    expect(dnaPairs('AYG')).toEqual([ [ 'A', 'T' ], [ 'G', 'C' ] ]);
  });
});
