/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

*/

var longestPalindrome = function(s) {
  let len = s.length,
    min = 0,
    maxLen = 1;
  if (len === 0) return '';
  if (len < 2) return s;

  for (let i = 0; i < len; ) {
    if (len - i <= maxLen / 2) {
      break;
    }
    let j = i,
      k = i;
    while (k < len - 1 && s[k + 1] === s[k]) ++k; //skip
    i = k + 1;
    while (k < len - 1 && j > 0 && s[k + 1] == s[j - 1]) {
      ++k;
      --j;
    } // Expand.
    let new_len = k - j + 1;
    if (new_len > maxLen) {
      min = j;
      maxLen = new_len;
    }
  }
  return s.substr(min, maxLen);
};

let string = 'babad';

console.log(longestPalindrome(string)); // bab
