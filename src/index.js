import path from 'node:path';
import fs from 'node:fs';
import _ from 'lodash';

const getAbsolutePath = (filepath) => {
    return path.resolve(process.cwd(), filepath);
   };
const readFile = (filepath) => {
    return fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
};
const parse = (filepath) => {
    return JSON.parse(filepath);
};

const getProcessedFile = (filepath) => {
    const result = parse(readFile(getAbsolutePath(filepath)));
    return result;
};

const genDiff = (filepath1, filepath2) => {
    const obj1 = getProcessedFile(filepath1);
    const obj2 = getProcessedFile(filepath2);
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const sortedKeys = _.sortBy(_.union(keys1, keys2));
    const diffResult = sortedKeys.map((key) => {
      if (!_.has(obj1, key)) {
        return ` + ${key}: ${obj2[key]}`;
      } else if (!_.has(obj2, key)) {
        return ` - ${key}: ${obj1[key]}`;
      } else if (_.isEqual(obj1[key], obj2[key])) {
        return `   ${key}: ${obj1[key]}`;
      } else {
        return ` - ${key}: ${obj1[key]}\n + ${key}: ${obj2[key]}`;
      }
    });
    return `{\n${diffResult.join('\n')}\n}`;
};


export { getProcessedFile, genDiff };