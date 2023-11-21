#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program.version('0.0.1', '-V, --version', 'output the version number');
program.argument('<filepath1>');
program.argument('<filepath2>');
program.description('Compares two configuration files and shows a difference.')
program.helpOption('-h, --help', 'output usage information')
program.option('-f, --format <type>',  'output format')
program.action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
        });
program.parse();