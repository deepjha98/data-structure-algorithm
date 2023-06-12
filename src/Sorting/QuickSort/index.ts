import { SwapValueInArray } from "../../helpers/index";

// Quick Sort
export const QuickSort = (array: number[]) => {
  const helper = (arr: number[], start: number, end: number) => {
    if (start >= end) return;
    const p = partition(arr, start, end);
    console.log({ p, start, end });
    helper(arr, start, p - 1);
    helper(arr, p + 1, end);
  };
  helper(array, 0, array.length - 1);
  return array;
};
// QuickSort([21, 72, 15, 3, 7, 97, 45]);

const partition = (arr: number[], start: number, end: number): number => {
  const pivot = arr[start];

  let count = 0;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      count++;
    }
  }
  const pivotIndex = start + count;
  if (count > 0) {
    SwapValueInArray(arr, start, pivotIndex);

    let i = start,
      j = end;
    while (i < pivotIndex && j > pivotIndex) {
      while (arr[i] <= pivot) i++;
      while (arr[j] > pivot) j--;
      if (i < count && j > count) {
        SwapValueInArray(arr, i++, j--);
      }
    }
  }

  console.log({ start, end, arr, count, pivotIndex });
  return pivotIndex;
};
