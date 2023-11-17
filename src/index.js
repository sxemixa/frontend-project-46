import path from 'node:path';
import fs from 'node:fs'; 

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

export { getProcessedFile };

//объединение ключей
//что такое технический долг?
//const keys = _.union(_.keys(obj1), _keys(obj2));








//const build = (key, obj1, obj2) => {
   // const val1 = obj1[key];
   // const val2 = obj2[key];
   // if (val1 && val2) {
       // if (val1 === val2 || (_.isObject(val1) && _.isObject(val2))) {
            //const children = _.isObject(val2) ? buildDiff(val1, val2) : [];
            //return { key, childern, type: 'unchanged',
                //value: _.isObject(val1) ? null : val1,
         //   };
      //  }
   // }
//};