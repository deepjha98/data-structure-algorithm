// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
export const mergeTwoSortedArray = function (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  if (m === 0) return nums2;
  if (n === 0) return nums1;
  let current = nums1.length - 1;
  while (n) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[current] = nums1[m - 1];
      m--;
    } else {
      nums1[current] = nums2[n - 1];
      n--;
    }
    current--;
  }
  return nums1;
};

// mergeTwoSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
