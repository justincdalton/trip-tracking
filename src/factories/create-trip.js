const timeDiff = require('../utils/time-diff');

module.exports = function createTrip() {
  let driver;
  let startTime;
  let endTime;
  let totalTime;
  let miles;

  const parseTripString = (input) => {
    const [, rawDriver, rawStartTime, rawEndTime, rawMiles] = input.split(' ');
    const [startHour, startMinute] = rawStartTime.split(':');
    const [endHour, endMinute] = rawEndTime.split(':');

    driver = rawDriver;
    startTime = new Date();
    startTime.setHours(Number.parseInt(startHour, 10));
    startTime.setMinutes(Number.parseInt(startMinute, 10));
    endTime = new Date();
    endTime.setHours(Number.parseInt(endHour, 10));
    endTime.setMinutes(Number.parseInt(endMinute, 10));

    miles = Number.parseFloat(rawMiles);
    totalTime = timeDiff(startTime, endTime);
  };

  const get = () => ({
    driver,
    miles,
    totalTime,
  });

  const set = (args) => {
    ({ driver, miles, totalTime } = args);
  };

  return Object.freeze({
    parseTripString,
    get,
    set,
  });
};
