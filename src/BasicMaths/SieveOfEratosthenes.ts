// Given an integer n, return the number of prime numbers that are strictly less than n.
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let primes = new Array(n).fill(0);
  let count = 0;
  for (let i = 2; i < n; i++) {
    let j = 2;
    if (primes[i] === 0) {
      count++;
      while (i * j < n) {
        primes[i * j] = 1;
        j++;
      }
    }
  }
  return count;
};
