// Given an array nums, return true if the array was originally sorted in non-decreasing order,
// then rotated some number of positions (including zero). Otherwise, return false.
export function checkSortedAndRotated(nums: number[]): boolean {
  let n = nums.length;
  let numberOfGreater = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) numberOfGreater++;
  }
  if (nums[0] < nums[n - 1]) {
    numberOfGreater++;
  }
  return numberOfGreater <= 1 ? true : false;
}

// checkSortedAndRotated([3,4,5,1,2])
