/*
You have N books, each with Ai number of pages. 
M students need to be allocated contiguous books, with each student getting at least one book.
Out of all the permutations, the goal is to find the permutation
where the student with the most pages allocated to him gets the minimum number of pages, 
out of all possible permutations.*/

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */

export class BookAllocationProblem {
  isPossible(arr: number[], n: number, m: number, mid: number) {
    let students = 1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (sum + arr[i] <= mid) {
        sum += arr[i];
      } else {
        students++;
        if (students > m || arr[i] > mid) {
          return { possible: false, students };
        }
        sum = arr[i];
      }
    }
    console.log({ n, m, students, sum, mid });
    return { possible: true, students };
  }
  //Function to find minimum number of pages.
  findPages(a: number[], n: number, m: number) {
    //your code here
    let start = 0;
    let end = a.reduce((acu, curr) => acu + curr, 0);
    let mid = Math.floor(start + (end - start) / 2);
    let result = -1;
    while (start <= end) {
      const { possible, students } = this.isPossible(a, n, m, mid);
      console.log({ start, mid, end, result, possible, students });
      if (possible) {
        if (students === m) {
          result = mid;
        }
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      mid = Math.floor(start + (end - start) / 2);
    }
    return result;
  }
}

export const sol = new BookAllocationProblem();
// sol.findPages([12, 34, 67, 90], 4, 2);
