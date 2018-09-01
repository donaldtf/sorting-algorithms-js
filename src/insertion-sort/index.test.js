import test from 'ava';
import { insertionSort } from './';
import { testCases } from '../test-cases';

testCases.forEach((testCase) => {
	test(`insertion sort - ${testCase.name}`, t => {
		t.deepEqual(insertionSort(testCase.input), testCase.expected);
	});
})
