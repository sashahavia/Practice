var containsDuplicate = function(nums) {
  let result = [];
  // nums.sort()
  nums.forEach((elem, index) => {
    if (nums.indexOf(elem, index + 1) > -1) {
      if (result.indexOf(elem) === -1) {
        result.push(elem);
      }
    }
  });
  console.log(result);
  return result.length !== 0;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

console.log(containsDuplicate([1, 2, 3, 4])); // false
