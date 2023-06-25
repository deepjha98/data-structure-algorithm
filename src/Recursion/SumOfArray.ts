/**
 * Sum of array items
 */
export const sumOfArray = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return arr[0] + sumOfArray(arr.slice(1));
};
// sumOfArray([1,2,3,4,5])
