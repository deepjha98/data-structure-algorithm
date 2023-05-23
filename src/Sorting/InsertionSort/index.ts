import { SwapValueInArray } from "../../helpers/index";

// Insertion Sort
export const InsertionSort = (arr: number[]): number[] => {
  const arrLength = arr.length;
  if (arrLength <= 1) return arr;

  for (let i = 1; i < arrLength; i++) {
    let pointer = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[pointer]) {
        SwapValueInArray(arr, j, pointer);
        pointer--;
      } else {
        break;
      }
    }
  }

  return arr;
};
// InsertionSort([21, 72, 15, 3, 7, 97, 45]);
