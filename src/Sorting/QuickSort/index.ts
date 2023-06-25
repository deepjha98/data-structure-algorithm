import { SwapValueInArray } from "../../helpers/index";

// Quick Sort
export const QuickSort = (array: number[]) => {
  const helper = (arr: number[], start: number, end: number) => {
    if (start >= end) return;
    const pivotIndex = partition(arr, start, end);
    helper(arr, start, pivotIndex - 1);
    helper(arr, pivotIndex + 1, end);
  };
  helper(array, 0, array.length - 1);
  return array;
};
// QuickSort([21, 72, 15, 3, 7, 97, 45]);

const partition = (arr: number[], start: number, end: number): number => {
  const pivot = arr[start];
  let count = 0;
  for (let i = 1; i <= end; i++) {
    if (arr[i] < pivot) count++;
  }
  const pivotIndex = start + count;
  SwapValueInArray(arr, start, pivotIndex);
  let i = start,
    j = end;
  console.log(arr);
  while (i < pivotIndex || j > pivotIndex) {
    console.log({ I: arr[i], J: arr[j], j, i, start, end, arr });
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) {
      j--;
    }
    SwapValueInArray(arr, i, j);
  }
  console.log({ arr, pivotIndex, i, j, count });
  return pivotIndex;
};
