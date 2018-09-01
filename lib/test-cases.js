'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var testCases = exports.testCases = [{
  input: [],
  expected: [],
  name: 'with empty array'
}, {
  input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  expected: [],
  name: 'with pre sorted array'
}, {
  input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  name: 'with reverse sorted array'
}, {
  input: [4, 3, 5, 8, 6, 2, 0, 1],
  expected: [0, 1, 2, 3, 4, 5, 6, 8],
  name: 'with even amount of mixed elements'
}, {
  input: [7, 4, 9, 1, 2, 6, 3],
  expected: [1, 2, 3, 4, 6, 7, 9],
  name: 'with odd amount of mixed elements'
}, {
  input: [10, 3, 0, 5, 8, 2, 9],
  expected: [0, 2, 3, 5, 8, 9, 10],
  name: 'extra case 1'
}, {
  input: [1, 2, 3, 1, 1, 4],
  expected: [1, 1, 1, 2, 3, 4],
  name: 'with duplicates'
}];