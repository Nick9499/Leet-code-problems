class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    let pair = position.map((p, i) => [p, speed[i]]); // making a pair of position and speed
    pair.sort((a, b) => b[0] - a[0]); // sort in desc order of position

    let stack = [];

    for (let [p, s] of pair) {
      stack.push((target - p) / s);

      if (
        stack.length >= 2 &&
        stack[stack.length - 1] <= stack[stack.length - 2]
      ) {
        stack.pop();
      }
    }

    return stack.length;
  }
}
