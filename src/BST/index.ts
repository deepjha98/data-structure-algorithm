class Node {
  data: number;
  left: Node | null;
  right: Node | null;
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export const insertIntoBST = (node: Node, data: number): Node => {
  if (node === null) {
    node = new Node(data);
    return node;
  }
  if (node.data < data) {
    node.right = insertIntoBST(node.right, data);
  } else {
    node.left = insertIntoBST(node.left, data);
  }
  return node;
};

export default Node;
