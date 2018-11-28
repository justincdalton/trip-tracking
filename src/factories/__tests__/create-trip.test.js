const createTrip = require('../create-trip');

const tripString = 'Trip Dan 07:15 07:45 17.3';

test('create a trip and parse a trip string', () => {
  const trip = createTrip();
  trip.parseTripString(tripString);
  expect(trip.get()).toEqual(
    expect.objectContaining({
      driver: 'Dan',
      speed: 17.3,
      totalTime: 30,
    }),
  );
});

test('create a trip and set from object', () => {
  const input = {
    driver: 'Jason',
    speed: 97,
    totalTime: 140,
  };
  const trip = createTrip();
  trip.set(input);
  expect(trip.get()).toEqual(expect.objectContaining(input));
});
