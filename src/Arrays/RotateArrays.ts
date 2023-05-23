/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = (i + k) % nums.length;

    result[temp] = nums[i];
  }
  nums = result;
}
