const createTrip = require('../create-trip');

const tripString = 'Trip Dan 07:15 07:45 17.3';

test('create a trip and parse a trip string', () => {
  const trip = createTrip();
  trip.parseTripString(tripString);
  expect(trip.get()).toEqual(
    expect.objectContaining({
      driver: 'Dan',
      speed: 17.3,
      startTime: '07:15',
      endTime: '07:45',
    }),
  );
});
