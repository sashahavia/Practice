/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let j = 1;
  let currNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== currNum) {
      nums[j++] = nums[i];
      currNum = nums[i];
    }
  }
  return j;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7]));
