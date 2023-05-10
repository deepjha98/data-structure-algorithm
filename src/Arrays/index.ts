// Uniques in odd array : https://www.codingninjas.com/codestudio/problems/find-unique_625159
// [2,3,6,1,2,3,6] => 1
export const uniqueInOddArray = (arr: number[]) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result ^ arr[i];
  }
  return result;
};
//  uniqueInOddArray([2,3,6,1,2,3,6])

// unique number of occurrences : https://leetcode.com/problems/unique-number-of-occurrences/
// The number of occurrences of each value in the array is unique or false otherwise.
// [1,2,2,1,1,3] => true
export function uniqueOccurrences(arr: number[]): boolean {
  let flag: any = {};
  for (let i = 0; i < arr.length; i++) {
    arr[i] in flag ? (flag[arr[i]] += 1) : (flag[arr[i]] = 0);
  }
  let result = 0;
  Object.values(flag).forEach((item: number) => {
    result = result ^ item;
  });
  return !!result;
}
// uniqueOccurrences([1,2,2,1,1,3])

// An array of elements between 1 , size-1. There is a number which repeats itself
// find that number ARR= [1,2,3,4,4]
export function findDuplicate(arr: number[]): number {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }
  for (let i = 1; i < arr.length; i++) {
    ans = ans ^ i;
  }
  return ans;
}
// findDuplicate([1,2,3,4,4],5)

// Return intersection of two arrays
export function findArrayIntersection(
  arr1: number[],
  arr2: number[]
): number[] {
  let i = 0,
    j = 0;

  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] == arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}
// findArrayIntersection([1, 2, 2, 2, 3, 4],[2,3])

// You are given an integer array 'ARR' of size 'N' and an integer 'S'. Your task is
// to return the list of all pairs of elements such that each sum of elements of
// each pair equals 'S'.
function triplePairSum(arr1: number[], arr2: number[], sum: number) {}
// pairSum([1, 2, 2, 2, 3, 4],5)

// Given an array of length N consisting of only 0s and 1s in random order.
// Modify the array to segregate 0s on left side and 1s on the right side of the array.
// --> 0 0 0 1 1
export function segregate0and1(arr: (0 | 1)[], n: number) {
  let i = 0,
    j = n - 1;
  while (i <= j) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    } else if (arr[j] === 1) {
      j--;
    } else if (arr[i] === 0) {
      i++;
    }
  }
}
// segregate0and1([0, 0, 1, 1, 0],5)
