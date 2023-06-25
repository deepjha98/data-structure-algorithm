export class RatInMaze {
  findPath(m, n) {
    let ans = [];
    this.getallpath(m, n, 0, 0, ans, "");
    return ans;
  }

  getallpath(matrix, n, row, col, ans, cur) {
    if (row >= n || col >= n || row < 0 || col < 0 || matrix[row][col] === 0) {
      return;
    }

    if (row === n - 1 && col === n - 1) {
      ans.push(cur);
      return;
    }

    matrix[row][col] = 0;

    this.getallpath(matrix, n, row - 1, col, ans, cur + "U");
    this.getallpath(matrix, n, row, col + 1, ans, cur + "R");
    this.getallpath(matrix, n, row, col - 1, ans, cur + "L");
    this.getallpath(matrix, n, row + 1, col, ans, cur + "D");

    matrix[row][col] = 1;

    return;
  }
  isSafe(x, y, n, visited, m) {
    if (
      x < n &&
      x >= 0 &&
      y < n &&
      y >= 0 &&
      visited[x][y] === 0 &&
      m[x][y] === 1
    ) {
      return true;
    }
    return false;
  }
}
