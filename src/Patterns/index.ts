/*
 *
 **
 ***
 */
export const rightSkewed = ((n: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j > n - i) {
        console.log("*");
      } else {
        console.log(" ");
      }
    }
  }
})(4);
