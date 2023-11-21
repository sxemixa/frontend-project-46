import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';
const yamlFormats = ['yaml', 'yml'];

const getAbsolutePath = (filepath) => {
    return path.resolve(process.cwd(), filepath);
};

const readFile = (filepath) => {
    return fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
};

const parse = (filepath) => {
    const part = filepath.split('.');
    const format = part[part.length - 1];
    if (yamlFormats.includes(format)) {
        return yaml.load(readFile(filepath));
    } return JSON.parse(readFile(filepath));
};

export default parse;