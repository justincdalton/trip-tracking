module.exports = function createDriver(args) {
  const { name } = args;
  const trips = [];

  const addTrip = (trip) => {
    const { speed } = trip.get();
    if (speed <= 100 && speed >= 5) {
      trips.push(trip);
    }
  };

  const getName = () => name;

  const getTrips = () => trips;

  return Object.freeze({
    addTrip,
    getName,
    getTrips,
  });
};
