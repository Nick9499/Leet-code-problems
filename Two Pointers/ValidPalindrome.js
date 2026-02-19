/**
 * 1. Use two pointers l and r to go from start towards end and end to start
 * 2. run a loop until l and r crossed (l<r)
 * 3. while l and r did not crossed and current character is not alphanumeric skip it
 * 4. If it is alphanumeric convert to lowercase and try to check if they are equal
 * 5. If any mismatch found return false not a pallindrom
 * 6. Or increment l and decrement r
 * 7. If every character matches return true it is a pallindrom
 */
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let l = 0,
      r = s.length - 1;

    while (l < r) {
      while (l < r && !this.isAlphaNumeric(s[l])) {
        l++;
      }

      while (r > l && !this.isAlphaNumeric(s[r])) {
        r--;
      }

      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }

      l++;
      r--;
    }

    return true;
  }

  /**
   * @param {char} char
   * @return {boolean}
   */
  isAlphaNumeric(char) {
    return (
      (char >= "A" && char <= "z") ||
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9")
    );
  }
}
