'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _ = require('./');

var _testCases = require('../test-cases');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_testCases.testCases.forEach(function (testCase) {
	(0, _ava2.default)('insertion sort - ' + testCase.name, function (t) {
		t.deepEqual((0, _.insertionSort)(testCase.input), testCase.expected);
	});
});