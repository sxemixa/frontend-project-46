import { genDiff } from "../src";

test('genDiff test', () => {
    const diffOutput = genDiff('file1.json', 'file2.json');
    const expectedOutput = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;
    expect(diffOutput).toEqual(expectedOutput);
  });