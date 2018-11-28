const fs = require('fs');
const { promisify } = require('util');

module.exports = async function parseFile(filePath) {
  const readFile = promisify(fs.readFile);

  try {
    const res = await readFile(filePath);
    return res.toString().split('\n');
  } catch (e) {
    return e;
  }
};
