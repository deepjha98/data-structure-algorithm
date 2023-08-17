import BSTNode from "./BST";
import { insertIntoBST } from "./BST";

const node = new BSTNode(2);
const data: number[] = [6, 2, 7, 8, 1, 3, 9, 1];
data.forEach((element) => {
  insertIntoBST(node,element)
});

console.log(node)
