import { RatInMaze } from "./Recursion/ratInMaze";

const rat = new RatInMaze();

console.log(
  rat.findPath(
    [
      [1, 0, 0, 0],
      [1, 1, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 1, 1],
    ],
    4
  )
);
