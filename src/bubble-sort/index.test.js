import test from 'ava';
import { bubbleSort } from './';
import { testCases } from '../test-cases';

testCases.forEach((testCase) => {
	test(`bubble sort - ${testCase.name}`, t => {
		t.deepEqual(bubbleSort(testCase.input), testCase.expected);
	});
})
