const timeDiff = require('../utils/time-diff');

module.exports = function createTrip() {
  return {
    driver: '',
    startTime: null,
    endTime: null,
    totalTime: 0,
    miles: 0,
    parseTripString(input) {
      const [, rawDriver, rawStartTime, rawEndTime, rawMiles] = input.split(' ');
      const [startHour, startMinute] = rawStartTime.split(':');
      const [endHour, endMinute] = rawEndTime.split(':');

      this.driver = rawDriver;
      this.startTime = new Date();
      this.startTime.setHours(Number.parseInt(startHour, 10));
      this.startTime.setMinutes(Number.parseInt(startMinute, 10));
      this.endTime = new Date();
      this.endTime.setHours(Number.parseInt(endHour, 10));
      this.endTime.setMinutes(Number.parseInt(endMinute, 10));

      this.miles = Number.parseFloat(rawMiles);
      this.totalTime = timeDiff(this.startTime, this.endTime);
    },
    set(args) {
      const { driver, miles, totalTime } = args;
      this.driver = driver;
      this.miles = miles;
      this.totalTime = totalTime;
      return this;
    },
  };
};
