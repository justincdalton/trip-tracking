const parseEntities = require('../parse-entities');

const sampleInput = [
  'Driver Dan',
  'Driver Alex',
  'Driver Bob',
  'Driver Dan',
  'Trip Dan 07:15 07:45 17.3',
  'Trip Dan 06:12 06:32 21.8',
  'Trip Alex 12:01 13:16 42.0',
];

test('parses the input and returns drivers with trips', () => {
  const result = parseEntities(sampleInput);
  expect(result.length).toEqual(3);
  expect(result[0].trips.length).toEqual(2);
});
