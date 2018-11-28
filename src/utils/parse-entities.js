const createDriver = require('../factories/create-driver');
const createTrip = require('../factories/create-trip');

module.exports = function parseEntities(input) {
  const drivers = {};
  const trips = [];

  input.forEach((entity) => {
    const [type, name] = entity.split(' ');

    if (type === 'Driver') {
      if (!drivers[name]) {
        drivers[name] = createDriver({ name });
      }
    } else if (type === 'Trip') {
      const newTrip = createTrip();
      newTrip.parseTripString(entity);
      trips.push(newTrip);
    }
  });

  trips.forEach((trip) => {
    drivers[trip.driver].addTrip(trip);
  });

  return Object.values(drivers);
};
