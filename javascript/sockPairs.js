function findPairs(arr, n) {
  let i,
    pairs = 0;

  // Loop through the socks
  for (i = 0; i < n; i++) {
    // Find the index of the pair for current sock
    // indeof cuurent elemnt start from next element
    let pairIdx = arr.indexOf(arr[i], i + 1);
    // If the pair exists:
    if (pairIdx > -1) {
      // Remove both from the array
      arr.splice(i, 1);
      arr.splice(pairIdx - 1, 1);
      // Add 1 to pair and reset the loop
      pairs++;
      i = -1;
    }
    console.log('array', arr);
  }

  // Output
  return pairs;
}

let arr = [1, 2, 1, 2, 1, 3, 2];

console.log(findPairs(arr, 7));
