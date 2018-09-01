export function insertionSort(array) {
  let hasChange = true;
  let index = 0;

  if (array.length === 0 || array.length === 1) return array;

  while (hasChange) {
    hasChange = false;
    if (index > array.length - 2) index = 0;
    const first = array[index];
    const second = array[index + 1]
    if (second > first) {
      // const temp = second;
      array[index] = second;
      array[index + 1] = first;
      hasChange = true;
    }
  }

  return array
}
