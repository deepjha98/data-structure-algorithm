import { SwapValueInArray } from "../../helpers/index";

// Merge Sort
export const MergeSort = (array: number[]) => {
  const helper = (arr: number[], start: number, end: number) => {
    if (start >= end) return;
    let mid = Math.floor((start + end) / 2);
    console.log({ start, end });
    helper(arr, start, mid);
    helper(arr, mid + 1, end);
    merge(arr, start, end);
  };
  helper(array, 0, array.length - 1);
  return array;
};
// MergeSort([21, 72, 15, 3, 7, 97, 45]);

const merge = (arr: number[], start: number, end: number) => {
  const mid = Math.floor((start + end) / 2);

  const len1 = mid - start + 1;
  const len2 = end - mid;

  const arr1 = arr.slice(start, mid);
  const arr2 = arr.slice(mid, end);
  const result: number[] = [];
  console.log({ start, end, arr1, arr2 });
  let i = 0,
    j = 0;
  while (i < len1 && j < len2) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
    }
  }
  while (i < len1) {
    result.push(arr1[i]);
    i++;
  }
  while (j < len2) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};
