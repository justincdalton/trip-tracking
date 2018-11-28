const timeDiff = require('../time-diff');

test('calculates the difference in time between two dates', () => {
  const startDate = new Date(2018, 11, 27, 7, 12, 0, 0);
  const endDate = new Date(2018, 11, 27, 12, 42, 0, 0);
  const diff = timeDiff(startDate, endDate);
  expect(diff).toEqual(5.5);
});
