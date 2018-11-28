const util = require('util');
const parseFile = require('../parse-file');

jest.mock('util');

const file = `Driver Dan
Driver Alex
Driver Bob
Trip Dan 07:15 07:45 17.3
Trip Dan 06:12 06:32 21.8
Trip Alex 12:01 13:16 42.0`;

test('parseFile parses file lines into an array', async () => {
  const readFileMock = jest.fn().mockResolvedValue(file);
  util.promisify.mockReturnValue(readFileMock);

  const result = await parseFile();

  expect(result.length).toBe(6);
  expect(result).toEqual(
    expect.arrayContaining([
      'Driver Dan',
      'Driver Alex',
      'Driver Bob',
      'Trip Dan 07:15 07:45 17.3',
      'Trip Dan 06:12 06:32 21.8',
      'Trip Alex 12:01 13:16 42.0',
    ]),
  );
});

test('parseFile returns an error if readFile fails', async () => {
  const readFileMock = jest.fn().mockRejectedValue('error error');
  util.promisify.mockReturnValue(readFileMock);

  try {
    await parseFile();
  } catch (e) {
    expect(e).toEqual('error error');
  }
});
