/**
 * Check if an array is sorted
 */
export const isSorted = (arr: number[]): boolean => {
  if (arr.length === 1 || arr.length === 0) return true;
  if (arr[0] > arr[1]) return false;
  return isSorted(arr.slice(1));
};
// isSorted([1,2,3,4,5])
