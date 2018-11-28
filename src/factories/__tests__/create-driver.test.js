const createDriver = require('../create-driver');
const createTrip = require('../create-trip');

test('it creates a new driver instance with the name set', () => {
  const driver = createDriver({ name: 'Eleanor' });
  expect(driver.getName()).toEqual('Eleanor');
});

test('it adds a new trip to the drivers stored trips', () => {
  const driver = createDriver('Chidi');
  const trip = createTrip();
  const tripValues = {
    driver: 'Chidi',
    speed: 25,
    totalTime: 12,
  };
  trip.set(tripValues);
  driver.addTrip(trip);
  expect(driver.getTrips()).toEqual(expect.arrayContaining([trip]));
});

test('it ignores trip if the average speed is greater than 100', () => {
  const driver = createDriver('Jason');
  const trip = createTrip();
  const tripValues = {
    driver: 'Jason',
    speed: 125,
    totalTime: 3,
  };
  trip.set(tripValues);
  driver.addTrip(trip);
  expect(driver.getTrips().length).toEqual(0);
});

test('it ignores trip if the average speed is less than 5', () => {
  const driver = createDriver('Tahani');
  const trip = createTrip();
  const tripValues = {
    driver: 'Tahani',
    speed: 3,
    totalTime: 12,
  };
  trip.set(tripValues);
  driver.addTrip(trip);
  expect(driver.getTrips().length).toEqual(0);
});
