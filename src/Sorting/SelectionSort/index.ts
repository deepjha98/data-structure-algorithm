import { SwapValueInArray } from "../../helpers/index";

// Selection Sort
export const SelectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (smallest > arr[j]) {
        smallestIndex = j;
        smallest = arr[j];
      }
    }

    if (smallestIndex !== i) {
      SwapValueInArray(arr, i, smallestIndex);
    }
  }
  return arr;
};
// SelectionSort([21, 72, 15, 3, 7, 97, 45]);
