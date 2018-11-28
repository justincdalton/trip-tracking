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
    miles: 9,
    totalTime: 0.25,
    averageSpeed: 36,
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
    miles: 12,
    totalTime: 3,
    averageSpeed: 120,
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
    miles: 1,
    totalTime: 12,
    averageSpeed: 3,
  };
  trip.set(tripValues);
  driver.addTrip(trip);
  expect(driver.getTrips().length).toEqual(0);
});

test('calculate results with 0 trips', () => {
  const driver = createDriver({ name: 'Chidi' });
  expect(driver.calculateTotals()).toEqual('Chidi: 0 miles');
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
    const trip = createTrip();
    trip.set(data);
    driver.addTrip(trip);
  });

  expect(driver.calculateTotals()).toEqual('Eleanor: 167 miles @ 46 mph');
});
