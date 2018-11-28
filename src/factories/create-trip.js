const minuteDiff = require('../utils/minute-diff');

module.exports = function createTrip() {
  let driver;
  let startTime;
  let endTime;
  let totalTime;
  let speed;

  const parseTripString = (input) => {
    const [, rawDriver, rawStartTime, rawEndTime, rawSpeed] = input.split(' ');
    const [startHour, startMinute] = rawStartTime.split(':');
    const [endHour, endMinute] = rawEndTime.split(':');

    driver = rawDriver;
    startTime = new Date();
    startTime.setHours(Number.parseInt(startHour, 10));
    startTime.setMinutes(Number.parseInt(startMinute, 10));
    endTime = new Date();
    endTime.setHours(Number.parseInt(endHour, 10));
    endTime.setMinutes(Number.parseInt(endMinute, 10));

    speed = Number.parseFloat(rawSpeed);

    totalTime = minuteDiff(startTime, endTime);
  };

  const get = () => ({
    driver,
    totalTime,
    speed,
  });

  const set = (args) => {
    ({ driver, speed, totalTime } = args);
  };

  return Object.freeze({
    parseTripString,
    get,
    set,
  });
};
