/**
 * 1. Create a new set with the nums array
 * 2. define longest starting with `0`
 * 3. loop through the numSet
 * 4. Check for every number does it have it's previous number sequence by checking if the current number's(n) previous number (n-1) is present in the Set or not
 * 5. If not exis we run a loop to until numSet has num+length which(length) will start at `0` so we start at the current num and if it does exists we increase the length
 * 6. At the end we check for the longest b/w `longest` and `length` & return
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
      if (!numSet.has(num - 1)) {
        let length = 0;
        while (numSet.has(num + length)) {
          length += 1;
        }

        longest = Math.max(length, longest);
      }
    }

    return longest;
  }
}
