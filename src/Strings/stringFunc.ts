// Remove All Occurrences of a Substring
// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:
/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
export var removeOccurrences = function (s: string, part: string): string {
  while (s.length != 0 && s.indexOf(part) >= 0) {
    s = s.replace(part, "");
  }
  return s;
};
// removeOccurrences("daabcbaabcbc", "abc");

// Permutation in String
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
function checkInclusion(s1: string, s2: string): boolean {}
// checkInclusion()
