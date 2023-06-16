export const subsets = function (nums: number[]) {
  const ans: number[] = [];
  const output: number[] = [];
  let index = 0;
  solve(nums, output, index, ans);
  return ans;
};

const solve = (nums: number[], output: number[], index: number, ans: any[]) => {
  if (index >= nums.length) {
    ans.push(output);
    return;
  }
  // Exclude
  solve(nums, [...output], index + 1, ans);
  // include
  let element = nums[index];
  output.push(element);
  console.log({ output });
  solve(nums, [...output], index + 1, ans);
};
