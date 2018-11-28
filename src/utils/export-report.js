const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

const format = (drivers) => {
  const totals = drivers.map(driver => driver.calculateTotals());

  totals.sort((a, b) => b.miles - a.miles);

  const array = totals.map((driver) => {
    if (driver.miles < 1) {
      return `${driver.name}: 0 miles`;
    }
    return `${driver.name}: ${driver.miles} miles @ ${driver.averageSpeed} mph`;
  });

  return array.join('\n');
};

const generate = async (filePath, drivers) => {
  const formattedDrivers = format(drivers);
  try {
    await writeFile(filePath, formattedDrivers);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  format,
  generate,
};
