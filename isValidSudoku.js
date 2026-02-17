/**
 * Steps
 * 1. create 3 maps one for column, one for row and one for the square
 * 2. run a loop within a loop for 0 to 9
 * 3. for squares map use (r/3, c/3) as indices and r and c for rows and columns respectively
 * 4. we check if current element is present in the row or column or square map and if found we got duplicates and should return false
 * 5. if not we add new Set for each indices in the maps
 * 6. then we add each elements to the rows, columns, and squares map and continue the loop for the next iteration
 */
class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const cols = new Map();
    const rows = new Map();
    const squares = new Map();

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === ".") continue;

        const squareKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;

        if (
          (rows.get(r) && rows.get(r).has(board[r][c])) ||
          (cols.get(c) && cols.get(c).has(board[r][c])) ||
          (squares.get(squareKey) && squares.get(squareKey).has(board[r][c]))
        ) {
          return false;
        }

        if (!rows.has(r)) rows.set(r, new Set());
        if (!cols.has(c)) cols.set(c, new Set());
        if (!squares.has(squareKey)) squares.set(squareKey, new Set());

        rows.get(r).add(board[r][c]);
        cols.get(c).add(board[r][c]);
        squares.get(squareKey).add(board[r][c]);
      }
    }

    return true;
  }
}
