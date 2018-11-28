module.exports = function createDriver(args) {
  const { name } = args;
  const trips = [];

  const addTrip = (trip) => {
    const { averageSpeed } = trip.get();
    if (averageSpeed <= 100 && averageSpeed >= 5) {
      trips.push(trip);
    }
  };

  const getName = () => name;

  const getTrips = () => trips;

  const calculateTotals = () => {
    if (trips.length < 1) {
      return `${name}: 0 miles`;
    }

    const totals = trips.reduce(
      (prev, trip) => ({
        miles: prev.miles + trip.miles,
        totalTime: prev.totalTime + trip.totalTime,
      }),
      {},
    );

    totals.averageSpeed = Math.round(totals.miles / totals.totalTime);
    totals.roundedMiles = Math.round(totals.miles);

    return `${name}: ${totals.roundedMiles} miles @ ${totals.averageSpeed} mph`;
  };

  return Object.freeze({
    addTrip,
    getName,
    getTrips,
    calculateTotals,
  });
};
