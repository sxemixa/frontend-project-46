import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'node:fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync((getFixturePath(filename)), 'utf-8');

describe('genDiff', () => {
  const expectStylish = readFile('expectedStylish.txt');
  const expectPlain = readFile('expectedPlain.txt');
  const expectJson = readFile('expectedJson.txt');

  describe.each(['json', 'yaml'])('formats', (format) => {
    const filepath1 = getFixturePath(`file1.${format}`);
    const filepath2 = getFixturePath(`file2.${format}`);
    test.each([
      ['stylish', expectStylish],
      ['plain', expectPlain],
      ['json', expectJson]])('formatters: %s', (formatter, expected) => {
      expect(genDiff(filepath1, filepath2, formatter)).toBe(expected);
    });
  });
});
