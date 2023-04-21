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
