class Solution {
  public int removeDuplicates(int[] nums) {

    if (nums.length == 0)
      return 0;
    int j = 1;
    int currNum = nums[0];
    for (int i = 1; i < nums.length; i++) {
      if (nums[i] != currNum) {
        nums[j++] = nums[i];
        currNum = nums[i];
      }
    }
    return j;
  }
}
