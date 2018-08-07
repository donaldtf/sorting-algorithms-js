import test from 'ava';
import { insertionSort } from './';

test('my passing test', t => {
	const expected = [];
	const result = insertionSort();
	t.deepEqual(result, expected);
});

test('my failing test', t => {
	t.fail();
});
