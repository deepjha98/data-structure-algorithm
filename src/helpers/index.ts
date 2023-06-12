export const SwapValueInArray = (
  arr: number[],
  index1: number,
  index2: number
) => {
  const temp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = temp;
};
