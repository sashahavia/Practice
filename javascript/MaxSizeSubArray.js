/*
Leetcode: Maximum Size Subarray Sum Equals k

Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:

Input: nums = [1, -1, 5, -2, 3], k = 3
Output: 4
Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
Example 2:

Input: nums = [-2, -1, 2, 1], k = 1
Output: 2
Explanation: The subarray [-1, 2] sums to 1 and is the longest.
Follow Up:
Can you do it in O(n) time?

*/

var maxSubArrayLen = function(nums, k) {
  const map = {};

  let max = 0;

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum == k) {
      max = Math.max(max, i + 1);
    }

    let diff = sum - k;

    if (map.hasOwnProperty(diff)) {
      max = Math.max(max, i - map.get(diff));
    }

    if (!map.hasOwnProperty(sum)) {
      map[sum] = i;
    }
  }

  return max;
};

let nums = [1, -1, 5, -2, 3],
  k = 3;
console.log(maxSubArrayLen(nums, k)); // 4
