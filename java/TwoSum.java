import java.util.Arrays;
class TwoSum {
  public static int[] twoNumberSum(int[] array, int targetSum) {
    // Write your code here.
		Arrays.sort(array);
		int start = 0;
		int end = array.length - 1;
		while (start < end){
			int sum = array[start] + array[end];
			if (sum == targetSum){
      	return new int[] {array[start], array[end]};
			} else if (sum > targetSum){
      	end--;
    	} else if (sum < targetSum){
      	start++;
    	}
		}
  	return new int[0];
  }
}
