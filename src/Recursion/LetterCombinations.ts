/**
 *Given a string containing digits from 2-9 inclusive,
 *return all possible letter combinations that the number could represent.
 *@returns(["ad","ae","af","bd","be","bf","cd","ce","cf"])
 */
export function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];
  const answer: string[] = [];
  const output = "";
  let index = 0;
  const mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  solve(digits, index, output, answer, mapping);
  return answer;
}
// letterCombinations("23");

const solve = (
  digits: string,
  index: number,
  output: string,
  answer: string[],
  mapping: string[]
) => {
  if (index >= digits.length) {
    answer.push(output);
    return;
  }
  let number = Number(digits[index]);
  let map = mapping[number];
  for (let i = 0; i < map.length; i++) {
    solve(digits, index + 1, output.concat(map[i]), answer, mapping);
    output.slice(0, -1);
  }
};
