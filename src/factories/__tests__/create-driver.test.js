const createDriver = require('../create-driver');
const createTrip = require('../create-trip');

test('it creates a new driver instance with the name set', () => {
  const driver = createDriver({ name: 'Eleanor' });
  expect(driver.name).toEqual('Eleanor');
});

test('it adds a new trip to the drivers stored trips', () => {
  const driver = createDriver('Chidi');
  const trip = createTrip().set({
    driver: 'Chidi',
    miles: 9,
    totalTime: 0.25,
  });
  driver.addTrip(trip);
  expect(driver.trips).toEqual(expect.arrayContaining([trip]));
});

test('it ignores trip if the average speed is greater than 100', () => {
  const driver = createDriver('Jason');
  const trip = createTrip().set({
    driver: 'Jason',
    miles: 12,
    totalTime: 3,
  });
  driver.addTrip(trip);
  expect(driver.trips.length).toEqual(0);
});

test('it ignores trip if the average speed is less than 5', () => {
  const driver = createDriver('Tahani');
  const trip = createTrip().set({
    driver: 'Tahani',
    miles: 1,
    totalTime: 12,
  });
  driver.addTrip(trip);
  expect(driver.trips.length).toEqual(0);
});

test('calculate results with 0 trips', () => {
  const driver = createDriver({ name: 'Chidi' });
  expect(driver.calculateTotals()).toEqual(
    expect.objectContaining({
      name: 'Chidi',
      miles: 0,
      averageSpeed: 0,
    }),
  );
});

test('calculate results with trips', () => {
  const driver = createDriver({ name: 'Eleanor' });
  const tripData = [
    {
      driver: 'Eleanor',
      miles: 13,
      totalTime: 0.2,
    },
    {
      driver: 'Eleanor',
      miles: 120,
      totalTime: 2.5,
    },
    {
      driver: 'Eleanor',
      miles: 2,
      totalTime: 0.15,
    },
    {
      driver: 'Eleanor',
      miles: 32,
      totalTime: 0.8,
    },
  ];
  tripData.forEach((data) => {
    driver.addTrip(createTrip().set(data));
  });

  expect(driver.calculateTotals()).toEqual(
    expect.objectContaining({
      name: 'Eleanor',
      miles: 167,
      averageSpeed: 46,
    }),
  );
});
