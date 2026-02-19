/**
 * 1. first sort the array
 * 2. then we go through the array
 * 3. we break if nums[i] is greater than zero as since nums[l] and nums[r] is greater than nums[i], there is no chance
 * of sums equates to 0
 * 4. while going through the array if we find duplicates we continue
 * 5. we create the left and right pointer
 * 6. We do the sum while l<r
 * 7. If sum>0 we decrease the right pointer
 * 8. If sum<0 we increase the left pointer
 * 9. else we add the nums[i], nums[l], nums[r] to the list
 * 10. then we increase the left pointer and decrease the right pointer
 * 11. We also check if any duplicates present then we do the 10th step again and we continue to do until no duplicate found
 */
class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b);

    const res = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break;

      if (nums[i] > 0 && nums[i] === nums[i - 1]) continue;

      let l = i + 1,
        r = nums.length - 1;

      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];

        if (sum > 0) {
          r--;
        } else if (sum < 0) {
          l++;
        } else {
          res.push([nums[i], nums[l], nums[r]]);
          l++;
          r--;

          while (l < r && nums[l] === nums[l - 1]) l++;
          while (r > l && nums[r] === nums[r + 1]) r--;
        }
      }
    }

    return res;
  }
}
