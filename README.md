# String Libs

A library of string manipulation functions to help Javascript developers.

![npm bundle size](https://img.shields.io/bundlephobia/min/@tsamantanis/string-lib?style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/tsamantanis/string-lib?style=for-the-badge)
![Travis (.org)](https://img.shields.io/travis/tsamantanis/string-lib?style=for-the-badge)

## Installation

To install this library, run

### `npm install @tsamantanis/string-lib`

inside your project directory.

## Usage

To use the string library in your JS file, import the library by using the following:

```
const stringLib = require("@tsamantanis/string-lib")
```
### Example

```
const stringLib = require("@tsamantanis/string-lib")

console.log(stringLib.camelCase("Hello World!")) // returns the string input in camel case
```

### Example using String.prototype
```
const stringLib = require("@tsamantanis/string-lib")

console.log("Hello World!".camelCase) // returns the string input in camel case
```
