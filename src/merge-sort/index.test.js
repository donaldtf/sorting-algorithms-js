import test from 'ava';
import { mergeSort } from './';
import { testCases } from '../test-cases';

testCases.forEach((testCase) => {
	test(`merge sort - ${testCase.name}`, t => {
		t.deepEqual(mergeSort(testCase.input), testCase.expected);
	});
})
