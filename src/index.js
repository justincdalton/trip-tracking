const parseFile = require('./utils/parse-file');
const parseEntities = require('./utils/parse-entities');
const exportReport = require('./utils/export-report');

const main = async () => {
  const entities = await parseFile('src/input.txt');
  const drivers = parseEntities(entities);
  exportReport.generate('src/report.txt', drivers);
};

main();
