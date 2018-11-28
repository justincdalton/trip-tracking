module.exports = function createDriver({ name }) {
  return {
    name,
    trips: [],
    addTrip(trip) {
      const { miles, totalTime } = trip;
      const averageSpeed = miles / totalTime;
      if (averageSpeed <= 100 && averageSpeed >= 5) {
        this.trips.push(trip);
      }
    },
    calculateTotals() {
      const totals = this.trips.reduce(
        (prev, trip) => ({
          miles: prev.miles + trip.miles,
          totalTime: prev.totalTime + trip.totalTime,
        }),
        { miles: 0, totalTime: 0 },
      );

      totals.averageSpeed = totals.miles && Math.round(totals.miles / totals.totalTime);
      totals.roundedMiles = Math.round(totals.miles);

      return { name, averageSpeed: totals.averageSpeed, miles: totals.roundedMiles };
    },
  };
};
