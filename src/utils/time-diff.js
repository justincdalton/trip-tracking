const timeDiff = (startDate, endDate) => Math.abs(endDate.getTime() - startDate.getTime()) / 36e5;

module.exports = timeDiff;
