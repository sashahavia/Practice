function twoSum(array, targetSum) {
  // Write your code here.
  let result = [];
  array.sort((a, b) => a - b);
  // console.log(array)
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    if (array[start] + array[end] === targetSum) {
      result.push(array[start]);
      result.push(array[end]);
    }
    if (array[start] + array[end] >= targetSum) {
      end--;
    } else if (array[start] + array[end] <= targetSum) {
      start++;
    }
  }
  return result;
}

console.log(twoSum([2, 5, 5, 11], 10));
