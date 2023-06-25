export const gcdOfNumbers = (a: number, b: number): number => {
  if (a === 0) return b;
  if (b === 0) return a;
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
};
