#!/usr/bin/env node

import { program } from 'commander';
import * as fs from 'node:fs'; 

program.version('0.0.1', '-V, --version', 'output the version number');
program.argument('<filepath1>');
program.argument('<filepath2>');
program.description('Compares two configuration files and shows a difference.')
program.helpOption('-h, --help', 'output usage information')
program.option('-f, --format <type>',  'output format')
program.action((filepath1, filepath2) => {
    console.log(fs.readFileSync('file1.json', 'utf8'));
    console.log(fs.readFileSync('file2.json', 'utf8'));
        });
program.parse();