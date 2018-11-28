const minuteDiff = (startDate, endDate) => Math.round((endDate.getTime() - startDate.getTime()) / 60000);

module.exports = minuteDiff;
