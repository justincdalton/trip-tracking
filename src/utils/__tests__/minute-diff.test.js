const minuteDiff = require('../minute-diff');

test('calculates the difference in minutes between two dates', () => {
  const startDate = new Date(2018, 11, 27, 7, 12, 0, 0);
  const endDate = new Date(2018, 11, 27, 12, 45, 0, 0);
  const diff = minuteDiff(startDate, endDate);
  expect(diff).toEqual(333);
});
