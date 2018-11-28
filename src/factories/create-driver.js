module.exports = function createDriver(args) {
  const { name } = args;
  const trips = [];

  const addTrip = (trip) => {
    trips.push(trip);
  };

  const getName = () => name;

  const getTrips = () => trips;

  return Object.freeze({
    addTrip,
    getName,
    getTrips,
  });
};
