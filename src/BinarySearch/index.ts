/** S0rt 0, 1 2 - DUTCH National flag algorithm
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export var sort012 = function (nums: (0 | 1 | 2)[]) {};
sort012([2, 0, 2, 1, 1, 0]);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export var firstAndLastOccurence = function (
  nums: number[],
  target: number
): number[] {
  let start = 0,
    end = nums.length - 1,
    mid = Math.floor((start + end) / 2);
  let ans = [-1, -1];
  while (start <= end) {
    if (nums[mid] === target) {
      ans[0] = mid;
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (ans[0] === -1) return ans;
  start = ans[0];
  end = nums.length - 1;
  mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (nums[mid] === target) {
      ans[1] = mid;
      start = mid + 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return ans;
};
// firstAndLastOccurence([5,7,7,8,8,10],8) nums = [5,7,7,8,8,10], target = 8

// Given a sorted array Arr of size N and a number X,
// you need to find the number of occurrences of X in Arr : Binary search intuition
const findOccurenceInSortedArray = (nums: number[], target: number): number => {
  let n = nums.length - 1;
  if (n < 0) return 0;
  let start = 0,
    end = nums.length - 1,
    mid = Math.floor((end - start) / 2);
  let left = 0;
  //   First occurence
  while (start <= end) {
    if (target === nums[mid]) {
      left = mid;
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((end - start) / 2);
  }
  if (left === 0) return 0;
  let count = 1;

  while (left < nums.length - 1 && nums[left] === target) {
    count++;
    left++;
  }
  return count;
};
// findOccurenceInSortedArray([1, 1, 2, 2, 2, 2, 3],2) => 4

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr: number[]) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((end - start) / 2);
  while (start <= end) {
    if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) return mid;
    else if (arr[mid - 1] < arr[mid]) {
      start = mid + 1;
    } else if (arr[mid + 1] < arr[mid]) {
      end = mid - 1;
    }
  }
  return mid;
};

// Find pivot in a sorted and rotated array
export const findPivot = (nums: number[]) => {
  let start = 0,
    end = nums.length - 1,
    mid = Math.floor(start + (end - start) / 2);
  while (start < end) {
    if (nums[mid] >= nums[0]) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = Math.floor(start + (end - start) / 2);
  }

  return start;
};
// findPivot([8,10,17,1,3])

// Given the array nums after the possible rotation and an integer target,
// return the index of target if it is in nums, or -1 if it is not in nums.
export function searchInRotatedSorted(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1,
    mid = Math.floor(start + (end - start) / 2);
  while (start < end) {
    if (nums[mid] >= nums[0]) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  if (nums[start] > nums[start - 1]) {
    start = 0;
  }
  console.log(start);
  if (target >= nums[start] && target <= nums[start]) {
    return binarySearch(nums, start, nums.length - 1, target);
  } else if (start === 0) {
    return binarySearch(nums, 0, nums.length - 1, target);
  } else {
    return binarySearch(nums, 0, start - 1, target);
  }
}
// searchInRotatedSorted([4,5,6,7,0,1,2],0)

function binarySearch(
  nums: number[],
  start: number,
  end: number,
  target: number
) {
  let mid = Math.floor(start + (end - start) / 2);
  console.log(start, end, mid);
  while (start <= end) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    console.log(start, end, mid);
    mid = Math.floor(start + (end - start) / 2);
  }
  return -1;
}

// Given a non-negative integer x, return the square root of x
// rounded down to the nearest integer. The returned integer should be non-negative as well.
export var mySqrt = function (x) {
  let start = 0,
    end = x,
    mid = Math.floor(start + (end - start) / 2);
  let ans = -1;
  while (start <= end) {
    let square = mid * mid;
    if (square === x) {
      return mid;
    } else if (square < x) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }

  return ans;
};
//
