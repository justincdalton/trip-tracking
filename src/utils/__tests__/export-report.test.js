const exportReport = require('../export-report');
const createDriver = require('../../factories/create-driver');
const createTrip = require('../../factories/create-trip');

const drivers = [
  createDriver({ name: 'Chidi' }),
  createDriver({ name: 'Eleanor' }),
  createDriver({ name: 'Tahani' }),
];

drivers[0].addTrip(createTrip().set({ driver: 'Chidi', miles: 15, totalTime: 0.4 }));
drivers[0].addTrip(createTrip().set({ driver: 'Chidi', miles: 129, totalTime: 2.5 }));
drivers[1].addTrip(createTrip().set({ driver: 'Eleanor', miles: 2, totalTime: 0.1 }));
drivers[1].addTrip(createTrip().set({ driver: 'Eleanor', miles: 30, totalTime: 0.4 }));
drivers[1].addTrip(createTrip().set({ driver: 'Eleanor', miles: 12, totalTime: 0.25 }));

test('formats the array of drivers into strings', () => {
  const result = exportReport.format(drivers);
  expect(result).toEqual(`Chidi: 144 miles @ 50 mph
Eleanor: 44 miles @ 59 mph
Tahani: 0 miles`);
});
