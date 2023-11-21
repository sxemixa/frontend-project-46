import { genDiff } from "../src";

test('genDiff json test', () => {
    const diffOutput = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');
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

test('genDiff yml test', () => {
    const diffOutput = genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml');
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