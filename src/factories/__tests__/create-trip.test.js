const createTrip = require('../create-trip');

const tripString = 'Trip Dan 07:15 07:45 17.3';

test('create a trip and parse a trip string', () => {
  const trip = createTrip();
  trip.parseTripString(tripString);
  expect(trip).toEqual(
    expect.objectContaining({
      driver: 'Dan',
      miles: 17.3,
      totalTime: 0.5,
    }),
  );
});

test('create a trip and set from object', () => {
  const input = {
    driver: 'Jason',
    miles: 12,
    totalTime: 140,
  };
  const trip = createTrip();
  trip.set(input);
  expect(trip).toEqual(expect.objectContaining(input));
});
