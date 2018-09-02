export function mergeSort(array) {
  if (array.length === 1 || array.length === 0) return array;

  const first = mergeSort(array.slice(0, array.length / 2));
  const second = mergeSort(array.slice(array.length / 2));

  return merge(first, second);
}

function merge(arr1, arr2) {
  const merged = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) merged.push(arr1.shift());
    else if (arr2[0] < arr1[0]) merged.push(arr2.shift());
    else {
      merged.push(arr1.shift());
      merged.push(arr2.shift());
    }
  }

  arr1.forEach(item => merged.push(item));
  arr2.forEach(item => merged.push(item));

  return merged;
}
