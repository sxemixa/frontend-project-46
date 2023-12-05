### Hexlet tests and linter status:
[![Actions Status](https://github.com/sxemixa/frontend-project-46/actions/workflows/myfirstcheck.yml/badge.svg)](https://github.com/sxemixa/frontend-project-46/actions)
[![Actions Status](https://github.com/sxemixa/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/sxemixa/frontend-project-46/actions)
### Climat maintainability and test coverage status:
[![Maintainability](https://api.codeclimate.com/v1/badges/aaebd675ec5f9dbd100d/maintainability)](https://codeclimate.com/github/sxemixa/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/aaebd675ec5f9dbd100d/test_coverage)](https://codeclimate.com/github/sxemixa/frontend-project-46/test_coverage)

## Gendiff

This program that takes two files (JSON, YAML) and returns the difference of them.

Features:
 - Supported formats: JSON, YAML. 
 - Can return difference in the next forms: plain text, stylish, json.

## Installation and system requirements

### install dependencies
```
make install
```
### install the package
```
make link
```
### help
````
gendiff -h
````
### Example
````
gendiff -format plain __fixtures__/file1.json __fixtures__/file2.json
````
### System Requirements
Node.js (21.1.0)

## Project Demonstration
[![asciicast](https://asciinema.org/a/pjBhkrelddoT5UhNDEwE1TgTG.svg)](https://asciinema.org/a/pjBhkrelddoT5UhNDEwE1TgTG)
