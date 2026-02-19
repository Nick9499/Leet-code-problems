/**
 * 1. Use 2 pointers l & r
 * 2. start l from the beginning and r from the end
 * 3. we keep adding elements in l and r index and summing them to see if it is higher or lower than the target
 * 4. If higher we decrease the r right pointer
 * 5. If lower we increase the l left pointer
 * 6. We do this because the array is sorted and the sum will increase if we increase the left pointer and decrease if we decrease the right pointer
 * 7. we return the indices+1 once we find the currentTarget === target
 */
class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let l = 0,
      r = numbers.length - 1;

    while (l < r) {
      const currentSum = numbers[l] + numbers[r];

      if (currentSum > target) {
        r--;
      } else if (currentSum < target) {
        l++;
      } else {
        return [(l = 1), r + 1];
      }
    }
    return [];
  }
}
