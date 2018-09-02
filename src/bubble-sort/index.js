export function bubbleSort(array) {
  let hasChanged = false;
  let index = 0;

  if (array.length === 0 || array.length === 1) return array;

  while (index !== array.length) {
    const first = array[index];
    const second = array[index + 1]

    if (second < first) {
      array[index + 1] = first;
      array[index] = second;
      hasChanged = true;
    }

    if (index === array.length - 1 && hasChanged) {
      index = 0;
      hasChanged = false;
    } else {
      index += 1;
    }
  }

  return array
}
