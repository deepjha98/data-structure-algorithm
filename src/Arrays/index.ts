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
