class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const n = nums.length;
    const output = new Array(n - k + 1);
    const queue = new Deque();

    let l = 0,
      r = 0;

    while (r < n) {
      while (queue.size() && nums[queue.back()] < nums[r]) queue.popBack();

      queue.pushBack(r);

      if (l > queue.front()) queue.popFront();

      if (r + 1 >= k) {
        output[l] = nums[queue.front()];
        l++;
      }
      r++;
    }

    return output;
  }
}
