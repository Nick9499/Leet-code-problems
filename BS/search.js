class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   * nums = [-1,0,2,4,6,8], target = 4
   */
  search(nums, target) {
    let l = 0,
      r = nums.length;

    while (l < r) {
      let m = l + Math.floor((r - l) / 2);
      if (nums[m] > target) {
        r = m;
      } else {
        l = m + 1;
      }
    }

    return l > 0 && nums[l - 1] === target ? l - 1 : -1;
  }
}
