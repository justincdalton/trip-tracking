module.exports = function createTrip() {
  let driver;
  let startTime;
  let endTime;
  let totalTime;
  let speed;

  const calculateTotalTime = () => {
    totalTime = Math.round(new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000;
  };

  const parseTripString = (input) => {
    let rawSpeed;
    [, driver, startTime, endTime, rawSpeed] = input.split(' ');
    speed = Number.parseFloat(rawSpeed);
    calculateTotalTime();
  };

  const get = () => ({
    driver,
    startTime,
    endTime,
    totalTime,
    speed,
  });

  return Object.freeze({
    calculateTotalTime,
    parseTripString,
    get,
  });
};
