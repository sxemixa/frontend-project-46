import _ from 'lodash';
import parse from '../src/parsers.js';

const genDiff = (filepath1, filepath2) => {
    const obj1 = parse(filepath1);
    const obj2 = parse(filepath2);
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

export default genDiff;
