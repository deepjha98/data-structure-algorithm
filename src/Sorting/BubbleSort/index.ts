import { SwapValueInArray } from "../../helpers/index";

// Bubble Sort - In every round max is placed in the last
export const BubbleSort = (arr: number[]): number[] => {
  let sortedIndex = arr.length;
  while (sortedIndex > 0) {
    let i = 0,
      j = i + 1;

    while (j < sortedIndex) {
      if (arr[i] > arr[j]) {
        SwapValueInArray(arr, i, j);
      }
      i++;
      j++;
    }
    sortedIndex--;
  }
  return arr;
};
// BubbleSort ([21, 72, 15, 3, 7, 97, 45]);
