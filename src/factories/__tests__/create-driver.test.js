const createDriver = require('../create-driver');

test('it creates a new driver instance with the name set', () => {
  const driver = createDriver({ name: 'Eleanor' });
  expect(driver.getName()).toEqual('Eleanor');
});

test('it adds a new trip to the drivers stored trips', () => {
  const driver = createDriver('Chidi');
  driver.addTrip('some test trip');
  expect(driver.getTrips()).toEqual(expect.arrayContaining(['some test trip']));
});
